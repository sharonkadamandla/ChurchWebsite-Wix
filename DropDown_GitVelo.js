$w.onReady(function () {
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
