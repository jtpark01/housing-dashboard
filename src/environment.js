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
import { lineChart } from "./charts/line-chart.js";

window.addEventListener("DOMContentLoaded", async () => {

    initCookieConsent();
    await insertHead("Environment");
    insertHeader();
    insertNavButtons();
    insertFooter();
    insertExpandButtons();

    // Insert values into page cards below

    // Content for card 1

    const [GHGALL_data, GHGALL_meta] = await readData("GHGALL");
    updateYearSpans(GHGALL_data, GHGALL_meta);

    const card_1_raw = GHGALL_data
        .filter(row => row["Statistic"] == "Total GHG" &&
row["Year"] == latest_year &&
row["Local Government District"] == "Northern Ireland")
        .map(col => col["Grand total"])[0];

    // BuildR display value: 17,879
    const card_1_value = card_1_raw.toLocaleString("en-GB", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    insertValue("card-1-value", card_1_value);


    // Content for card 2

    const [INDRIVERQNI_data, INDRIVERQNI_meta] = await readData("INDRIVERQNI");

    const card_2_raw = INDRIVERQNI_data
        .filter(row => row["Year"] == latest_year)
        .map(col => col["Northern Ireland"])[0];

    // BuildR display value: 0.07
    const card_2_value = card_2_raw.toFixed(2);
    insertValue("card-2-value", card_2_value);


    // Content for card 3

    const [INDCOASTQNI_data, INDCOASTQNI_meta] = await readData("INDCOASTQNI");

    const card_3_raw = INDCOASTQNI_data
        .filter(row => row["Year"] == latest_year)
        .map(col => col["Northern Ireland"])[0];

    // BuildR display value: 10
    const card_3_value = card_3_raw;
    insertValue("card-3-value", card_3_value);


    // Content for card 4

    const [INDCONDSTENI_data, INDCONDSTENI_meta] = await readData("INDCONDSTENI");

    const card_4_raw = INDCONDSTENI_data
        .filter(row => row["Financial year"] == latest_year)
        .map(col => col["Northern Ireland"])[0];

    // BuildR display value: 52.0
    const card_4_value = card_4_raw.toFixed(1);
    insertValue("card-4-value", card_4_value);


    // Content for card 5

    const [WASTELGD_data, WASTELGD_meta] = await readData("WASTELGD");

    const card_5_raw = WASTELGD_data
        .filter(row => row["Statistic"] == "Household waste recycling rate" &&
row["Financial Year"] == latest_year)
        .map(col => col["Northern Ireland"])[0];

    // BuildR display value: 51.0
    const card_5_value = card_5_raw.toFixed(1);
    insertValue("card-5-value", card_5_value);


    // Content for card 6

    const [CHSCONCERNLGD_data, CHSCONCERNLGD_meta] = await readData("CHSCONCERNLGD");

    const card_6_raw = CHSCONCERNLGD_data
        .filter(row => row["Statistic"] == "Households concerned for Environment" &&
row["Financial Year"] == latest_year)
        .map(col => col["Northern Ireland"])[0];

    // BuildR display value: 71
    const card_6_value = card_6_raw;
    insertValue("card-6-value", card_6_value);


    // End page card content

    // Insert chart content below

    // Content for chart 1
    // BuildR chart type: line
    // BuildR matrix: GHGALL

    // BuildR line chart config start
    let line_chart_1_years = GHGALL_data
        .map(col => col["Year"]);

    line_chart_1_years = [...new Set(line_chart_1_years)];

    const line_chart_1_lines = [
        GHGALL_data
            .filter(row => line_chart_1_years.includes(row["Year"]) &&
                row["Statistic"] == "Total GHG" &&
                row["Local Government District"] == "Northern Ireland")
            .map(col => col["Grand total"])
    ];

    const line_chart_1_labels = ["Total"];

    lineChart({
        years: line_chart_1_years,
        lines: line_chart_1_lines,
        labels: line_chart_1_labels,
        unit: "",
        canvas_id: "line-canvas-1",
        expanded_canvas_id: "line-canvas-1-expanded",
        showPoints: true
    });

    const line_chart_1_query = {
        "Statistic": "Total GHG",
        "Local Government District": "Northern Ireland",
        "GHG sector": "Grand total"
    };

    downloadButton(
        "chart-1-capture",
        "GHGALL",
        dateFormat(GHGALL_meta.updated),
        line_chart_1_query
    );
    // BuildR line chart config end

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
