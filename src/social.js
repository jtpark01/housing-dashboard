import { insertHeader, insertFooter, insertHead, insertNavButtons } from "./utils/page-layout.js";
import { readData } from "./utils/read-data.js";
import { insertValue } from "./utils/insert-value.js";
import { latest_year, updateYearSpans, first_year, last_year } from "./utils/update-years.js";
import { config } from "./config/config.js";
import { insertExpandButtons } from "./utils/expand-buttons.js";
import { downloadButton } from "./utils/download-button.js";
import { dateFormat } from "./utils/date-format.js";
import { populateInfoBoxes } from "./utils/info-boxes.js";
import { initCookieConsent } from "./utils/cookies.js";

window.addEventListener("DOMContentLoaded", async () => {

    initCookieConsent();
    await insertHead("Social");
    insertHeader();
    insertNavButtons();
    insertFooter();
    insertExpandButtons();

    // Insert values into page cards below

    // Content for card 1

    const [MYE01T01_data, MYE01T01_meta] = await readData("MYE01T01");
    updateYearSpans(MYE01T01_data, MYE01T01_meta);

    const card_1_raw = MYE01T01_data
        .filter(row => row["Year"] == latest_year &&
row["Five year age bands"] == "All")
        .map(col => col["All persons"])[0];

    // BuildR display value: 1,927,855
    const card_1_value = card_1_raw.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    insertValue("card-1-value", card_1_value);


    // Content for card 2

    const [LELGD_data, LELGD_meta] = await readData("LELGD");

    const card_2_raw = LELGD_data
        .filter(row => row["Grouped Year"] == latest_year &&
row["Local Government District"] == "NI")
        .map(col => col["Females"])[0];

    // BuildR display value: 82.63
    const card_2_value = card_2_raw.toFixed(2);
    insertValue("card-2-value", card_2_value);


    // Content for card 3

    const [PRNI01_data, PRNI01_meta] = await readData("PRNI01");

    const card_3_raw = PRNI01_data
        .filter(row => row["Statistic"] == "Individual relative poverty" &&
row["Financial year"] == latest_year)
        .map(col => col["Northern Ireland"])[0];

    // BuildR display value: 12
    const card_3_value = card_3_raw;
    insertValue("card-3-value", card_3_value);


    // Content for card 4

    const [DESLSALGD_data, DESLSALGD_meta] = await readData("DESLSALGD");

    const card_4_raw = DESLSALGD_data
        .filter(row => row["Statistic"] == "Percentage of school leavers" &&
row["Academic year"] == latest_year &&
row["Local Government District"] == "Northern Ireland" &&
row["Attainment"] == "At least 5 GCSEs at grades A*-C (incl. equivalent qualifications)")
        .map(col => col["All persons"])[0];

    // BuildR display value: 87.7
    const card_4_value = card_4_raw.toFixed(1);
    insertValue("card-4-value", card_4_value);


    // Content for card 5

    const [BELONGNB_data, BELONGNB_meta] = await readData("BELONGNB");

    const card_5_raw = BELONGNB_data
        .filter(row => row["Year"] == latest_year)
        .map(col => col["All adults"])[0];

    // BuildR display value: 84
    const card_5_value = card_5_raw;
    insertValue("card-5-value", card_5_value);


    // Content for card 6

    const [LIFESATEQ_data, LIFESATEQ_meta] = await readData("LIFESATEQ");

    const card_6_raw = LIFESATEQ_data
        .filter(row => row["Statistic"] == "Average life satisfaction score for people aged 16 and over" &&
row["Financial year"] == latest_year)
        .map(col => col["Northern Ireland"])[0];

    // BuildR display value: 7.7
    const card_6_value = card_6_raw.toFixed(1);
    insertValue("card-6-value", card_6_value);


    // End page card content

    // Insert chart content below

    // Content for chart 1


    // Content for chart 2

    // End chart content

    // BuildR info boxes start
    populateInfoBoxes(
        [
            "Definitions",
            "Source",
            "What does the data mean?"
        ],
        [
            // DEFINITIONS BOX
            ``,

            // SOURCE BOX
            ``,

            // DATA MEANING BOX
            ``
        ]
    );
    // BuildR info boxes end


})
