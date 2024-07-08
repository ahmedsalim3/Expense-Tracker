# FINANCIAL EXPENSE TRACKER

This repository hosts the source code for a <a href="https://amedsalim.github.io/Expense-Tracker/">Financial Expense Tracker</a> web application. It enables users to conveniently manage their financial transactions.

<p align= "center">
<img src="https://img.shields.io/github/stars/amedsalim/Expense-Tracker?style=flat&color=green"></a>
<img src="https://hits.sh/github.com/amedsalim/Text-to-SQL-Generator.svg?label=views&color=green"></a>
</p>

<div align="center">
  
[[`Blog`](https://amedsalim.github.io/posts/expense-tracker/)] [[`Dashboard`](https://lookerstudio.google.com/embed/reporting/b077f790-5aaa-41b8-a5b0-846bfe006331/page/vetwD)] [[`Demo App`](https://amedsalim.github.io/Expense-Tracker/)]
  
</div>

![FET](https://github.com/amedsalim/Expense-Tracker/assets/126220185/fa74bf6a-59bd-4ee2-8fa0-17d6b42cdfc1)
<h6 align="center">View (<a href="https://amedsalim.github.io/Expense-Tracker/">live demonstration</a>)</h6>

## Features
- **Add New Data:** Input new expenses or income by specifying the account, category, transaction type, amount, and description.
- **Show Data:** View financial data in a Google Sheets document by clicking the "Show Data" button.
- **Dashboard:** Analyze and visualize financial data through an integrated dashboard.

## Technologies Used
- HTML: Structure of the web pages.
- CSS: Styling and layout.
- JavaScript: Functionalities of the application.
- Google Sheets API: Storage and management of financial data.
- Google Data Studio: Dashboard for data visualization and analysis.

## Usage
1. Clone the repository to your local machine by running `git clone https://github.com/amedsalim/Expense-Tracker.git` in a command prompt.
2. Create a new google [spreadsheet](https://docs.google.com/spreadsheets/u/0/?ec=asw-sheets-hero-goto) and add the columns: Date, Account, Category, Note, Amount, Income/Expense.
3. Go to **Extensions** > **Apps Script** in the menu bar to open the Google Apps Script editor.
4. Copy and paste the [App Script](AppsScript.js).
5. Click **Deploy** at the top right of the App Script page and select **New deployment**.
6. Set the deployment type to **Web App** and grant access to **Anyone**.
7. Authorize access and copy the Web app URL.
8. Paste the script URL in the [script.js](https://github.com/amedsalim/Expense-Tracker/blob/220ad13dc0b7492b21b323e886e7a43aa19f4814/assets/js/script.js#L6) file in your web browser.
9. Run [index.html](index.html) and start adding your financial transactions by filling out the form fields.

- Click the "Submit" button to add the transaction. To view your financial data, click the "Show Data" button. _Note: Replace the Google Sheets link in [Line 59](https://github.com/amedsalim/Expense-Tracker/blob/485e6c66240e63e37c4f38c8b5e06514f37e4996/index.html#L59) with your own Google Sheets document link._
- Create a new dashboard in <a href="https://lookerstudio.google.com/u/0/">Looker studio</a> and connect your data to report via **Google Sheets** or **BigQuery** connectors.
