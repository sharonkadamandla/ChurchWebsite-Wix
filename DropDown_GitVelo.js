/**
 * Wix Velo Code for Interactive Ministries Dropdown 
 * 
 * Link:
 * 
 * Funtionality : 
 * This script enables an interactive dropdown functionality for the Ministries page.
 * When a user clicks on a ministry title, its description expands while others collapse.
 * This ensures only one ministry's information is visible at a time, keeping the UI clean.
 * 
 * How to Use:
 * - Ensure the ministry titles and info sections have correct IDs in the Wix Editor.
 * - Connect the IDs to the "ministries" array below.
 * - The script automatically applies the interactive behavior when the page loads.
 * 
 */

$w.onReady(function () {
    // Define ministries with their corresponding title and info section IDs 
    const ministries = [
        { title: "#BibleStudiesTitle", info: "#BibleStudiesInfo" },
        { title: "#PrayerMinistryTitle", info: "#PrayerMinistryInfo" },
        { title: "#ChildrensChurchTitle", info: "#ChildrensChurchInfo" },
        { title: "#ChildrensMinistryTitle", info: "#ChildrensMinistryInfo" },
        { title: "#LadiesMinistryTitle", info: "#LadiesMinistryInfo" },
        { title: "#ArabicMinistryTitle", info: "#ArabicMinistryInfo" },
        { title: "#MusicMinistryTitle", info: "#MusicMinistryInfo" },
        { title: "#SpanishChurchTitle", info: "#SpanishChurchInfo" },
        { title: "#LibraryTitle", info: "#LibraryInfo" }
    ];

    // Collapses all info Boxes on page load
    ministries.forEach(ministry => {
        $w(ministry.info).collapse();
    });

    // Adding click handlers for each title
    ministries.forEach(ministry => {
        $w(ministry.title).onClick(() => {
            // Collapse all info Boxes except the clicked one
            ministries.forEach(m => {
                if (m.info !== ministry.info) {
                    $w(m.info).collapse();
                }
            });
            
            // Toggle the clicked info Box
            if ($w(ministry.info).collapsed) {
                $w(ministry.info).expand();
            } else {
                $w(ministry.info).collapse();
            }
        });
    });
});
