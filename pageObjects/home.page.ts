import { $ } from '@wdio/globals';

class HomePage {

    // Method to return the WebDriverIO element
    async getTitleText(): Promise<string> {
        const el = await $('android=new UiSelector().text("WEBDRIVER").className("android.widget.TextView")');
        await el.waitForExist({ timeout: 10_000 });
        return el.getText()
    }
}

export default new HomePage();
