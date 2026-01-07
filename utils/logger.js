// utils/logger.js
import winston from 'winston';
import fs from 'fs';
import path from 'path';

const logDir = 'logs'; // Directory for log files

// Create log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

export const logger = winston.createLogger({
  level: 'info', // Default log level (can be overridden by environment variables)
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }), // Log stack traces for errors
    winston.format.json() // Use JSON format for structured logging
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Colorize console output
        winston.format.simple() // Simple format for console readability
      ),
    }),
    new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'error' }), // Log errors to a file
    new winston.transports.File({ filename: path.join(logDir, 'combined.log') }), // Log all levels to another file
  ],
});

/**
 * Read the logger's combined log and attach it to Playwright's test report.
 * This function swallows errors and logs a warning so test files don't need to wrap this in try/catch.
 */
export async function attachLogToTest(testInfo, { filename = path.join(logDir, 'combined.log'), name = 'winston-log' } = {}) {
  try {
    if (!testInfo || typeof testInfo.attach !== 'function') {
      logger.warn('attachLogToTest called without a valid testInfo - skipping attachment');
      return;
    }
    const logText = await fs.promises.readFile(filename, 'utf8');
    await testInfo.attach(name, { body: logText, contentType: 'text/plain' });
  } catch (err) {
    // Log a warning but do not throw — test flow should not be interrupted by missing logs
    logger.warn(`Could not attach log file (${filename}): ${err && err.message ? err.message : err}`);
  }
}
