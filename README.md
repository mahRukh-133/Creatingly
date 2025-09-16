Automation Testing – Drag and Drop Project
Project Overview

This project focuses on automating tests for the drag-and-drop functionality inside Creatingly’s Design Studio. The goal is to demonstrate the testing process, write clear test cases, and implement automation using Cypress with the Page Object Model (POM).

Key Scenarios Tested

(Optional) Login with credentials – skipped because of captcha, explained below

Drop an Artboard

Drop a Chart element inside a stack container

Center align content inside the container

Resize the Chart element to fit the container

Login & Captcha

The login page includes Google reCAPTCHA, which is designed to block automated scripts. Since automation tools cannot solve captchas reliably, this step was not automated.

In real QA projects, teams usually handle this by disabling captcha in test environments or using API login. Because login is marked as optional, the tests start directly in the Design Studio to stay focused on the drag-and-drop requirements.

Approach & Best Practices

Cypress with Page Object Model for maintainable and reusable test code

Covered functional, UI, usability, performance, and compatibility aspects

Included both positive and negative test scenarios where possible

Clear structure with separate page objects for selectors and actions

How to Run Tests (Cloud Instance)

1. Open the cloud instance and log in:
   - URL: https://dev-run-tests-7c58559fdc.platform.creatingly.com
   - Credentials: Provided in the assignment brief

2. In the instance terminal, clone this repo and run tests:

   ```bash
   git clone https://github.com/mahRukh-133/Creatingly.git
   cd Creatingly
   npm ci --no-audit --no-fund
   npm run test:e2e -- --config baseUrl=https://stg.platform.creatingly.com/apps/
   ```

3. To run a specific spec (example):

   ```bash
   npx cypress run --spec "cypress/e2e/stack_chart.spec.js" --browser chrome --config baseUrl=https://stg.platform.creatingly.com/apps/
   ```

Notes

- Tests target the staging app at https://stg.platform.creatingly.com/apps/.
- The cloud instance is only the environment to run the tests, not the app under test.

Deliverables

Cypress automation tests organized with POM

README documentation

Test cases covering drag-and-drop flows

Presentation-ready test process overview