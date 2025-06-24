# Cypress Automation for Magento Test Site

## 💻 Requirements
- Node.js >= 16
- Git

## 🔧 Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/cypress-magento-tests.git
   cd cypress-magento-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   CYPRESS_USER_EMAIL=your_email@example.com
   CYPRESS_USER_PASSWORD=your_secure_password
   ```

4. Run tests:
   - Headless with report:
     ```bash
     npm run test:report
     ```
   - Open Cypress UI:
     ```bash
     npx cypress open
     ```

Mochawesome Test Reports: 

After running tests with npm run test:report or npx cypress run, the Mochawesome report will be generated at:
mochawesome-report/mochawesome.html

How to open the report:
Windows:
start mochawesome-report/mochawesome.html
macOS:
open mochawesome-report/mochawesome.html

Open this HTML file in your browser to see detailed test results with screenshots and logs.

## 📌 Test Cases
- ✅ Registration with Login
- ✅ Place Order with Multiple Products
- ✅ Wishlist to Checkout
- ✅ Search and Validate
