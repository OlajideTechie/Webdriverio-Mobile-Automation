# 📱 Mobile Automation Framework

A robust, cross-platform mobile automation framework built with **WebdriverIO**, **Appium**, **TypeScript**, and **Allure**. Designed to automate testing for both **Android** and **iOS** apps, this project demonstrates modern best practices including Page Object Model, gesture handling, and CI integration.

---

## 🚀 Tech Stack

- **[WebdriverIO](https://webdriver.io/)** – Automation test framework
- **[Appium](https://appium.io/)** – Cross-platform mobile automation tool
- **[TypeScript](https://www.typescriptlang.org/)** – Strongly typed JavaScript
- **[Allure Reporter](https://webdriver.io/docs/allure-reporter/)** – Test reporting
- **[GitHub Actions](https://github.com/features/actions)** – CI for test execution

---

## 📁 Folder Structure

mobile-automation-framework/
├── configs/ # WebdriverIO config files
│ ├── wdio.android.conf.ts
│ ├── wdio.ios.conf.ts
│ └── wdio.shared.conf.ts
├── test/
│ ├── specs/ # Test specifications
│ │ ├── login.spec.ts
│ │ └── home.spec.ts
│ ├── pageobjects/ # Page Object classes
│ │ ├── home.page.ts
│ │ └── successModal.page.ts
├── reports/ # Allure test reports
│ └── allure-results/
├── .github/workflows/ # GitHub Actions CI pipeline
│ └── ci.yml
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

# ⚙️ Setup & Installation

1. Clone the repository
    ```
    git clone https://github.com/yourusername/mobile-automation-framework.git
    cd mobile-automation-framework
    ```
2. Install dependencies
    ```
    npm install

3. Start Appium Server
   ```
   npx appium


# ▶️ Running Tests

Run Android Tests
```
npm run android

Run IOS Test
```
npm run ios


# 📱 Device Setup
# Android
- Use Android Studio to create an emulator.

- Start emulator with:
```
emulator -avd <emulator_name>

- Or connect a real device via USB and ensure it’s visible:
```
adb devices

# IOS
- Use Xcode to run a simulator:
```
xcrun simctl list
xcrun simctl boot <device_udid>
```

- Or connect a real device and start:
- ios_webkit_debug_proxy


# 📊 Allure Report

- Reports are stored in reports/allure-results/


# 🔁 GitHub Actions CI
CI is configured to run tests on every push to main.

Location:
.github/workflows/ci.yml

Includes:
- Dependency installation

- Appium setup

- Emulator-based test execution

- Allure artifact upload

## ⚠️ Disclaimer

> **Note**: iOS tests require macOS runners and are typically excluded from public CI due to provisioning complexities.