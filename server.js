var ukPostcode = require("uk-postcode");
var postcode = ukPostcode.fromString("HA5 4AF");
if (postcode.isValid()) {
  console.log(postcode);         // M1 1AA
  console.log(postcode.outward); // M1
  console.log(postcode.inward);  // 1AA
} else {
 console.log("Post code is not valid")
}


function matchSortcode(sortcode) {

  var cars = [
  {"Sort Code":"010004","Bank Name":"NATIONAL WESTMINSTER BANK PLC","Branch":"ACCRINGTON","field6":"","field7":""},
  {"Sort Code":"010008","Bank Name":"NATIONAL WESTMINSTER BANK PLC","Branch":"CLIENT MONIES SERVICE CTR","field6":"","field7":""},
  {"Sort Code":"010013","Bank Name":"NATIONAL WESTMINSTER BANK PLC","Branch":"ALDERLEY EDGE","field6":"","field7":""},
  {"Sort Code":"010039","Bank Name":"NATIONAL WESTMINSTER BANK PLC","Branch":"ASHTON-U-LYNE DELAMERE ST.","field6":"","field7":""},
  {"Sort Code":"010051","Bank Name":"NATIONAL WESTMINSTER BANK PLC","Branch":"BACUP","field6":"","field7":""},
  {"Sort Code":"010053","Bank Name":"NATIONAL WESTMINSTER BANK PLC","Branch":"BAMBER BRIDGE","field6":"","field7":""},
  {"Sort Code":"010061","Bank Name":"NATIONAL WESTMINSTER BANK PLC","Branch":"BARROW IN FURNESS","field6":"","field7":""},
  {"Sort Code":"010071","Bank Name":"NATIONAL WESTMINSTER BANK PLC","Branch":"BIDDULPH","field6":"","field7":""}]
  
  const object = {
    success: "Not valid sortcode"
  };
  
  for (i = 0; i < cars.length; i++) { 
    if(cars[i]["Sort Code"] === sortcode) {
       object = cars[i]
       object["success"] = "true"
       return object
    }
    return object
  }
  
  }
    matchSortcode("2343")

    function matchSortcode(postcode) {

      var cars = [{"Postcode":"BR1 1AA","In Use?":"Yes","Latitude":"51.401546","Longitude":"0.015415","Easting":"540291","Northing":"168873","Grid Ref":"TQ402688","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2016-05-01","Terminated":"","Parish":"Bromley, unparished area","National Park":"","Population":"","Households":"","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 018B","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"71","London zone":"5","LSOA Code":"E01000675","Local authority":"","MSOA Code":"E02000144","Middle layer super output area":"Bromley 018","Parish Code":"E43000196","Census output area":"E00003264","Constituency Code":"E14000604","Index of Multiple Deprivation":"20532","Quality":"1","User Type":"0","Last updated":"2018-11-15","Nearest station":"Bromley South","Distance to station":"0.218257"},
      {"Postcode":"BR1 1AB","In Use?":"Yes","Latitude":"51.406333","Longitude":"0.015208","Easting":"540262","Northing":"169405","Grid Ref":"TQ402694","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2012-03-01","Terminated":"","Parish":"Bromley, unparished area","National Park":"","Population":"","Households":"","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 008B","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"71","London zone":"4","LSOA Code":"E01000676","Local authority":"","MSOA Code":"E02000134","Middle layer super output area":"Bromley 008","Parish Code":"E43000196","Census output area":"E00003255","Constituency Code":"E14000604","Index of Multiple Deprivation":"10169","Quality":"1","User Type":"0","Last updated":"2018-11-15","Nearest station":"Bromley North","Distance to station":"0.253666"},
      {"Postcode":"BR1 1AD","In Use?":"No","Latitude":"51.400057","Longitude":"0.016715","Easting":"540386","Northing":"168710","Grid Ref":"TQ403687","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2014-09-01","Terminated":"2017-09-01","Parish":"Bromley, unparished area","National Park":"","Population":"","Households":"","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 018B","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"53","London zone":"5","LSOA Code":"E01000675","Local authority":"","MSOA Code":"E02000144","Middle layer super output area":"Bromley 018","Parish Code":"E43000196","Census output area":"E00003264","Constituency Code":"E14000604","Index of Multiple Deprivation":"20532","Quality":"1","User Type":"1","Last updated":"2018-11-15","Nearest station":"Bromley South","Distance to station":"0.0445591"},
      {"Postcode":"BR1 1AE","In Use?":"Yes","Latitude":"51.404543","Longitude":"0.014195","Easting":"540197","Northing":"169204","Grid Ref":"TQ401692","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2008-08-01","Terminated":"","Parish":"Bromley, unparished area","National Park":"","Population":"34","Households":"21","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 018C","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"71","London zone":"4","LSOA Code":"E01000677","Local authority":"","MSOA Code":"E02000144","Middle layer super output area":"Bromley 018","Parish Code":"E43000196","Census output area":"E00003266","Constituency Code":"E14000604","Index of Multiple Deprivation":"19350","Quality":"1","User Type":"0","Last updated":"2018-11-15","Nearest station":"Bromley North","Distance to station":"0.462939"},
      {"Postcode":"BR1 1AF","In Use?":"Yes","Latitude":"51.401392","Longitude":"0.014948","Easting":"540259","Northing":"168855","Grid Ref":"TQ402688","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2015-05-01","Terminated":"","Parish":"Bromley, unparished area","National Park":"","Population":"","Households":"","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 018B","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"58","London zone":"5","LSOA Code":"E01000675","Local authority":"","MSOA Code":"E02000144","Middle layer super output area":"Bromley 018","Parish Code":"E43000196","Census output area":"E00003264","Constituency Code":"E14000604","Index of Multiple Deprivation":"20532","Quality":"1","User Type":"0","Last updated":"2018-11-15","Nearest station":"Bromley South","Distance to station":"0.227664"},
      {"Postcode":"BR1 1AG","In Use?":"Yes","Latitude":"51.401392","Longitude":"0.014948","Easting":"540259","Northing":"168855","Grid Ref":"TQ402688","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2015-09-01","Terminated":"","Parish":"Bromley, unparished area","National Park":"","Population":"","Households":"","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 018B","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"58","London zone":"5","LSOA Code":"E01000675","Local authority":"","MSOA Code":"E02000144","Middle layer super output area":"Bromley 018","Parish Code":"E43000196","Census output area":"E00003264","Constituency Code":"E14000604","Index of Multiple Deprivation":"20532","Quality":"1","User Type":"0","Last updated":"2018-11-15","Nearest station":"Bromley South","Distance to station":"0.227664"},
      {"Postcode":"BR1 1AH","In Use?":"Yes","Latitude":"51.400441","Longitude":"0.01739","Easting":"540432","Northing":"168754","Grid Ref":"TQ404687","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2017-02-01","Terminated":"","Parish":"Bromley, unparished area","National Park":"","Population":"","Households":"","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 018B","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"53","London zone":"5","LSOA Code":"E01000675","Local authority":"","MSOA Code":"E02000144","Middle layer super output area":"Bromley 018","Parish Code":"E43000196","Census output area":"E00003264","Constituency Code":"E14000604","Index of Multiple Deprivation":"20532","Quality":"1","User Type":"0","Last updated":"2018-11-15","Nearest station":"Bromley South","Distance to station":"0.0489061"},
      {"Postcode":"BR1 1AJ","In Use?":"Yes","Latitude":"51.400489","Longitude":"0.018833","Easting":"540532","Northing":"168762","Grid Ref":"TQ405687","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2016-04-01","Terminated":"","Parish":"Bromley, unparished area","National Park":"","Population":"","Households":"","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 018B","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"55","London zone":"5","LSOA Code":"E01000675","Local authority":"","MSOA Code":"E02000144","Middle layer super output area":"Bromley 018","Parish Code":"E43000196","Census output area":"E00003264","Constituency Code":"E14000604","Index of Multiple Deprivation":"20532","Quality":"1","User Type":"0","Last updated":"2018-11-15","Nearest station":"Bromley South","Distance to station":"0.115632"},
      {"Postcode":"BR1 1AX","In Use?":"No","Latitude":"51.408226","Longitude":"0.017578","Easting":"540421","Northing":"169620","Grid Ref":"TQ404696","County":"Greater London","District":"Bromley","Ward":"Bromley Town","District Code":"E09000006","Ward Code":"E05000109","Country":"England","County Code":"E11000009","Constituency":"Bromley and Chislehurst","Introduced":"2001-06-01","Terminated":"2006-10-01","Parish":"Bromley, unparished area","National Park":"","Population":"","Households":"","Built up area":"Greater London","Built up sub-division":"Bromley","Lower layer super output area":"Bromley 008B","Rural/urban":"Urban major conurbation","Region":"London","Altitude":"70","London zone":"4","LSOA Code":"E01000676","Local authority":"","MSOA Code":"E02000134","Middle layer super output area":"Bromley 008","Parish Code":"E43000196","Census output area":"E00003250","Constituency Code":"E14000604","Index of Multiple Deprivation":"10169","Quality":"1","User Type":"1","Last updated":"2018-11-15","Nearest station":"Bromley North","Distance to station":"0.0420671"}
      ]
      
      var object = {
        postcode: postcode,
        success: "Not valid postcode"
      };
      
      for (i = 0; i < cars.length; i++) { 
        if(cars[i]["Postcode"] === postcode) {
          return cars[i]
        } else {
          return object
        }
      }
      
      }
        matchSortcode("BR1 1AA")
      
  