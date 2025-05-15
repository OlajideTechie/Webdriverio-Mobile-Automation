import { join } from 'path';
import fs from 'fs';
import allure from '@wdio/allure-reporter';

export const config: WebdriverIO.Config = {
  runner: 'local',

  // ── Appium Server Connection ────────────────────────────────────────────────
  hostname: '127.0.0.1',
  port: 4723,
  path: '/wd/hub',

  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,
  logLevel: 'info',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

  capabilities: [],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  services: [
    ['appium', {
      command: 'appium',
      args: {
        basePath: '/',
        relaxedSecurity: true
      }
    }]
  ],

  before: async () => {
    require('ts-node').register({ files: true });
  },

  // ── Hooks ───────────────────────────────────────────────────────────────────
  beforeTest: async () => {
    await driver.startRecordingScreen();
  },

  afterTest: async (test, context, { error }) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const testName = test.title.replace(/\s+/g, '_');

    const videoDir = join(process.cwd(), 'videos');
    const screenshotDir = join(process.cwd(), 'screenshots');
    if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir);
    if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir);

    // ── Stop and Save Video ───────────────────────────────────────────────
    const videoData = await driver.stopRecordingScreen();
    const videoPath = join(videoDir, `${testName}_${timestamp}.mp4`);
    fs.writeFileSync(videoPath, Buffer.from(videoData, 'base64'));

    // ➕ Add video to Allure report
    allure.addAttachment('Test Video', Buffer.from(videoData, 'base64'), 'video/mp4');

    // ── Save Screenshot on Failure ─────────────────────────────────────────
    if (error) {
      const screenshotPath = join(screenshotDir, `${testName}_${timestamp}.png`);
      await browser.saveScreenshot(screenshotPath);

      const screenshotBase64 = await browser.takeScreenshot();
      allure.addAttachment('Screenshot on Failure', Buffer.from(screenshotBase64, 'base64'), 'image/png');
    }
  }
};
