// wdio.ios.conf.ts
import { config as shared } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
  ...shared,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 16 Pro Max',
      'appium:platformVersion': '18.3.1',
      'appium:app': '/Users/olajideojo/Desktop/wdio-appium-ts/apps/wdiodemoapp.app', //.app for simulator, .ipa is for real device
      'appium:automationName': 'XCUITest',
      'appium:autoAcceptAlerts': true,
      'appium:fullReset': false,
      'appium:udid': '231FE589-3534-4D3A-AC26-4A82003AAE52',
      'appium:showXcodeLog': true,
    }
  ]
};
