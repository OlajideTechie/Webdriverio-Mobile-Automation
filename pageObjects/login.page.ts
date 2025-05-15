import type { ChainablePromiseElement } from 'webdriverio';
import { $ } from '@wdio/globals';

class LoginPage {

    // Navigate to the login pahe
    public get loginNav(): ChainablePromiseElement {
         return $('android=new UiSelector().text("Login").className("android.widget.TextView")');
    }

      // --- Locate email field ---
    public get emailField(): ChainablePromiseElement {
        return $('android=new UiSelector().text("Email").className("android.widget.EditText")');
    }
     
      // --- Locate password field ---
    public get passwordField(): ChainablePromiseElement {
        return $('android=new UiSelector().text("Password").className("android.widget.EditText")');
    }

      // --- Locate login button ---
  public get loginButton(): ChainablePromiseElement {
    return $('android=new UiSelector().className("android.view.ViewGroup").instance(16)');
  }

 public  async login(email : string, password : string ): Promise<void> {
    //Navigate to the login page
    await this.loginNav.waitForExist({ timeout: 5000 });
    await this.loginNav.click();    
    
    //enter login details
    await this.emailField.waitForExist({ timeout: 5000 });
    await this.emailField.clearValue();
    await this.emailField.setValue(email);
    
    //enter password details
    await this.passwordField.waitForExist({ timeout: 5000 });
    await this.passwordField.clearValue();
    await this.passwordField.setValue(password);

    await this.loginButton.waitForExist({ timeout: 5000 });
    await this.loginButton.click();
  }

}

export default new LoginPage();
