function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var account = e.parameter.account;
  var category = e.parameter.category;
  var note = e.parameter.note;
  var amount = e.parameter.amount;
  var incomeExpense = e.parameter['Income/Expense'];
  var date = new Date();
  sheet.appendRow([date, account, category, note, amount, incomeExpense]);

  var headers = { 'Access-Control-Allow-Origin': '*' };
  return ContentService.createTextOutput("Expense logged successfully.").setHeaders(headers);
}

function doGet() {
}
