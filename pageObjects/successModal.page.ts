import { $ } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

class successModal {

    public get textElement(): ChainablePromiseElement {
        return $('id=android:id/message');
    }

    public get closeModal(): ChainablePromiseElement {
        return $('id=android:id/button1');
    }

    public async getSuccessText(): Promise<string> {
        await this.textElement.waitForExist({ timeout: 8000 });
        const successText = await this.textElement.getText(); 

        //await this.textElement.getText();

        await this.closeModal.waitForExist({ timeout: 5000 });
        await this.closeModal.click();

        return successText;
      }
    }


export default new successModal();
