function sumbit_device() {
  var mersa_google_sheets = SpreadsheetApp.getActiveSpreadsheet();
  var mersa_submit_page = mersa_google_sheets.getSheetByName("Submit");
  var mersa_stockroom = mersa_google_sheets.getSheetByName("Stockroom");

  var mersa_date_source = mersa_submit_page.getRange(1,1,1,1).getValue();
  var mersa_day_source = mersa_submit_page.getRange(1,2,1,1).getValue();
  var mersa_operation_source = mersa_submit_page.getRange(2,1,1,1).getValue();
  var mersa_pack_source = mersa_submit_page.getRange(5,1,1,1).getValue();
  var mersa_devname_source = mersa_submit_page.getRange(3,1,1,1).getValue();
  var mersa_devnum_source = mersa_submit_page.getRange(4,1,1,1).getValue();

  const MERSA_MAX_COL = 1000;
  const MERSA_MAX_ROW = 2000;

  console.log(mersa_date_source);
  console.log(mersa_day_source);
  console.log(mersa_operation_source);
  console.log(mersa_pack_source);
  console.log(mersa_devname_source);
  console.log(mersa_devnum_source);

  mersa_stockroom.appendRow([mersa_date_source,mersa_day_source,mersa_operation_source,mersa_devname_source,mersa_devnum_source,mersa_pack_source]);

  var mersa_sheet_dest = mersa_stockroom.getRange(1,1,MERSA_MAX_ROW,MERSA_MAX_COL);

  mersa_sheet_dest.setFontFamily('Calibri');
  mersa_sheet_dest.setFontSize(16);
  mersa_sheet_dest.setVerticalAlignment('Middle');
  mersa_sheet_dest.setHorizontalAlignment('Center');
  mersa_sheet_dest.setWrap(true);

  mersa_submit_page.getRange(3,1,1,1).setValue('');
  mersa_submit_page.getRange(4,1,1,1).setValue('');

  var cell = mersa_submit_page.getRange("A3");
  mersa_submit_page.setCurrentCell(cell);
  
}
