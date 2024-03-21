# QA_Challenge

# Project README

## Environment Setup

Before running the Cypress project, please make sure you have the following software installed:

1. Node.js - You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code (VS Code) - You can download and install VS Code from the official website: [https://code.visualstudio.com](https://code.visualstudio.com)
3. Git Bash - You can download and install Git Bash from the official website: [https://gitforwindows.org](https://gitforwindows.org)
4. Google Chrome - You can download and install Google Chrome from the official website: [https://www.google.com/chrome](https://www.google.com/chrome)

Please ensure that the above software is properly installed and configured on your system before proceeding.

## Project Setup

To set up the project with Playwright follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the project directory using the `cd` command.
3. Get started by installing Playwright using npm or yarn. Run the following command:
     npm init playwright@latest

## What is installed:
Playwright will create the following files:
1. playwright.config.ts: Configure Playwright settings, including which browsers to run.
2. package.json and package-lock.json: Dependencies for your project.
3. tests/: Contains a basic example test to help you get started.
4. tests-examples/: Contains more detailed tests (e.g., testing a todo app).

## Clone the repository
Execute the following command to clone the repository: 
git clone <repository_url>

## Execute Playwright tests
To run playwright tests use the following command: 
npx playwright test --headed
