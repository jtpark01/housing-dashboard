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
    await insertHead("Economic");
    insertHeader();
    insertNavButtons();
    insertFooter();
    insertExpandButtons();

    // Insert values into page cards below

    // Content for card 1


    // Content for card 2


    // Content for card 3


    // Content for card 4


    // Content for card 5


    // Content for card 6


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
