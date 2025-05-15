// wdio.android.conf.ts
import { config as shared } from './wdio.shared.conf';
import { join } from 'path';


export const config: WebdriverIO.Config = {
  ...shared,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554',
      'appium:platformVersion': '16.0',
      'appium:app': join(process.cwd(), './apps/android.wdio.native.app.v1.0.8.apk'),
      'appium:automationName': 'UiAutomator2',
      'appium:autoGrantPermissions': true,
      'appium:fullReset': false
    }
  ],
  services: [
    ['appium', { args: { basePath: '/wd/hub' } }]
  ]
};

exports.config = config;
