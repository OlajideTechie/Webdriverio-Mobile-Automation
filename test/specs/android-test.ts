/// <reference types="expect-webdriverio" />

import HomePage from "../../pageObjects/home.page";
import loginPage from "../../pageObjects/login.page";
import successModal from "../../pageObjects/successModal.page";

import { expect } from '@wdio/globals';

describe('Webdriverio Android Automated Test', () => {
    it('should check the text on the welcome screen', async () => {

       const webdriverText = await HomePage.getTitleText();
       await expect(webdriverText).toEqual('WEBDRIVER');

    });

    it('login with valid username and password', async () => {
      
      await loginPage.login('quale@qa.team', 'Qwertyu1@');
      const successText = await successModal.getSuccessText();
      await expect(successText).toBe('You are logged in!');
   
   });

      // it.skip('login with no username and password', async () => {
      //    await loginPage.login('', '');
      //    const errorText = await loginPage.getErrorText(); // implement this in page object
      //    await expect(errorText).toBe('Please enter username and password');
      // });

  });
  