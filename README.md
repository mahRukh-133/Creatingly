
# Creatingly Drag-and-Drop Automation (Cypress)

## What is this?
This is my automation project for Creatingly’s Design Studio. I wrote Cypress tests to check the drag-and-drop features, using the Page Object Model (POM) to keep things clean and easy to update.

## What did I test?
- (Login is optional, so I skipped it because of captcha)
- Add an Artboard
- Drag a Chart into a stack container
- Center the content and container
- Resize the Chart to fit the container
- Negative tests: Try to drop or resize in ways that shouldn’t work

## Why did I skip login?
The login page uses Google reCAPTCHA, which blocks automation. In real projects, teams usually turn off captcha for test environments or use API login. Since login is optional, I started the tests right in the Design Studio.

## How did I write the tests?
- Used Cypress with the Page Object Model (POM)
- Wrote both positive and negative test cases
- Kept code organized and easy to read
- Made sure to check UI, usability, and compatibility

## How to run the tests (on the cloud instance)
1. Log in to the cloud instance:
   - URL: https://dev-run-tests-7c58559fdc.platform.creatingly.com
   - Use the credentials from the assignment
2. In the terminal, clone this repo and run:
   ```bash
   git clone https://github.com/mahRukh-133/Creatingly.git
   cd Creatingly
   npm ci --no-audit --no-fund
   npm run test:e2e -- --config baseUrl=https://stg.platform.creatingly.com/apps/
   ```
3. To run a specific test file:
   ```bash
   npx cypress run --spec "cypress/e2e/artboard.cy.js" --browser chrome --config baseUrl=https://stg.platform.creatingly.com/apps/
   ```

## Notes
- Tests run against https://stg.platform.creatingly.com/apps/
- The cloud instance is just for running tests, not the actual app

## What’s included?
- Cypress tests using POM
- This README
- Test cases for all main drag-and-drop flows
- A simple process you can follow or present