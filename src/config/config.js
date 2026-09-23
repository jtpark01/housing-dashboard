export const config = {
    // Dashboard title
    "title": "Social, economic and environment indicators",

    // Set order of page links and display text in navigation bar
    "navigation": [
  {
    "href": "index.html",
    "text": "Home"
  },
  {
    "href": "social.html",
    "text": "Social"
  },
  {
    "href": "economic.html",
    "text": "Economic"
  },
  {
    "href": "environment.html",
    "text": "Environment"
  },
  {
    "href": "user-notes.html",
    "text": "User Notes"
  }
],
    
    "portal_url": "https://data.nisra.gov.uk/",

    // Departmental abbreviations. See departments.js for available options
    "department": "TEO",

    // Data portal tables to use in the dashboard.
    // Re-run "src/r/data.R" script after each update to list below
    "matrix": ["GHGALL", "MYE01T01", "MIG01T02", "GHWPLGD", "GDHIPH", "PREJUD", "BELONGNB", "INDRESPECTEQ", "INDINTREPNI", "TRAFFICCOUNT", "LMSLGD", "NICEI", "NIETS02", "ABIRU", "TIFF", "GVA", "FADPSS", "FADPS", "TFP", "EPLA", "ESLA", "RMSROI", "ATSL", "FDIE", "PORT03", "BRESHEADLGD", "BUSINESSBANDLGD", "BUSBIRTHLGD", "BUSDEATHLGD", "INDCOASTQNI", "INDRIVERQNI", "INDCONDSTENI", "CHSCONCERNLGD", "WASTELGD", "LELGD", "PRNI01", "DESLSALGD", "LIFESATEQ"],
    
    "rateit": "link-to-rateit"
    
}
