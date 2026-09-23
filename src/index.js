import { insertHeader, insertFooter, insertHead, insertNavButtons } from "./utils/page-layout.js";
import { readData } from "./utils/read-data.js";
import { insertValue } from "./utils/insert-value.js";
import { latest_year, updateYearSpans, first_year } from "./utils/update-years.js";
import { config } from "./config/config.js";
import { initCookieConsent } from "./utils/cookies.js";

window.addEventListener("DOMContentLoaded", async () => {

    initCookieConsent();
    await insertHead("Home");
    insertHeader();
    insertNavButtons();
    insertFooter();


    // Insert values into homepage cards below

    // Content for card 1

    const [MYE01T01_data, MYE01T01_meta] = await readData("MYE01T01");
    updateYearSpans(MYE01T01_data, MYE01T01_meta);

    const headline_1_raw = MYE01T01_data
        .filter(row => row["Year"] == latest_year && row["Five year age bands"] == "All")
        .map(col => col["All persons"])[0];

    // BuildR display value: 1,927,855
    const headline_1 = headline_1_raw.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    insertValue("headline-1-value", headline_1);


    // Content for card 2

    const [LELGD_data, LELGD_meta] = await readData("LELGD");

    // BuildR LELGD year variables start
    const LELGD_year_column = LELGD_meta.variables
        .filter(x => x["code"].includes("TLIST"))
        .map(x => x["name"])[0];

    let LELGD_years = LELGD_data
        .sort((a, b) => a[LELGD_year_column] - b[LELGD_year_column])
        .map(row => row[LELGD_year_column]);

    LELGD_years = [...new Set(LELGD_years)];

    const LELGD_first_year = LELGD_years[0];
    const LELGD_latest_year = LELGD_years[LELGD_years.length - 1];
    const LELGD_last_year = LELGD_years.length >= 2 ? LELGD_years[LELGD_years.length - 2] : LELGD_latest_year;
    // BuildR LELGD year variables end

    // BuildR LELGD year spans start
    document.querySelectorAll(".LELGD-latest-year").forEach(el => {
        el.innerHTML = LELGD_latest_year;
    });

    document.querySelectorAll(".LELGD-last-year").forEach(el => {
        el.innerHTML = LELGD_last_year;
    });

    document.querySelectorAll(".LELGD-first-year").forEach(el => {
        el.innerHTML = LELGD_first_year;
    });

    // BuildR LELGD year spans end


    const headline_2_raw = LELGD_data
        .filter(row => row["Grouped Year"] == LELGD_latest_year && row["Local Government District"] == "NI")
        .map(col => col["Females"])[0];

    // BuildR display value: 82.63
    const headline_2 = headline_2_raw.toFixed(2);
    insertValue("headline-2-value", headline_2);


    // Content for card 3


    // Content for card 4


    // Content for card 5

    const [GHGALL_data, GHGALL_meta] = await readData("GHGALL");

    const headline_5_raw = GHGALL_data
        .filter(row => row["Statistic"] == "Total GHG" && row["Year"] == latest_year && row["Local Government District"] == "Northern Ireland")
        .map(col => col["Grand total"])[0];

    // BuildR display value: 17,879
    const headline_5 = headline_5_raw.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    insertValue("headline-5-value", headline_5);


    // Content for card 6

    const [WASTELGD_data, WASTELGD_meta] = await readData("WASTELGD");

    // BuildR WASTELGD year variables start
    const WASTELGD_year_column = WASTELGD_meta.variables
        .filter(x => x["code"].includes("TLIST"))
        .map(x => x["name"])[0];

    let WASTELGD_years = WASTELGD_data
        .sort((a, b) => a[WASTELGD_year_column] - b[WASTELGD_year_column])
        .map(row => row[WASTELGD_year_column]);

    WASTELGD_years = [...new Set(WASTELGD_years)];

    const WASTELGD_first_year = WASTELGD_years[0];
    const WASTELGD_latest_year = WASTELGD_years[WASTELGD_years.length - 1];
    const WASTELGD_last_year = WASTELGD_years.length >= 2 ? WASTELGD_years[WASTELGD_years.length - 2] : WASTELGD_latest_year;
    // BuildR WASTELGD year variables end

    // BuildR WASTELGD year spans start
    document.querySelectorAll(".WASTELGD-latest-year").forEach(el => {
        el.innerHTML = WASTELGD_latest_year;
    });

    document.querySelectorAll(".WASTELGD-last-year").forEach(el => {
        el.innerHTML = WASTELGD_last_year;
    });

    document.querySelectorAll(".WASTELGD-first-year").forEach(el => {
        el.innerHTML = WASTELGD_first_year;
    });

    // BuildR WASTELGD year spans end


    const headline_6_raw = WASTELGD_data
        .filter(row => row["Statistic"] == "Household waste recycling rate" && row["Financial Year"] == WASTELGD_latest_year)
        .map(col => col["Northern Ireland"])[0];

    // BuildR display value: 51.0
    const headline_6 = headline_6_raw.toFixed(1);
    insertValue("headline-6-value", headline_6);


})
