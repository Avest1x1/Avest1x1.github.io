// commissions.js
// clock stuff.

function padTwo(n) {
    return String(n).padStart(2, "0");
}

function formatTime(date, timeZone) {
    try {
        var parts = new Intl.DateTimeFormat("en-GB", {
            timeZone: timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }).formatToParts(date);

        var h = parts.find(function(p) { return p.type === "hour"; }).value;
        var m = parts.find(function(p) { return p.type === "minute"; }).value;
        var s = parts.find(function(p) { return p.type === "second"; }).value;
        return `${h}:${m}:${s}`;
    } catch(e) {
        return "??:??:??";
    }
}

function formatDate(date, timeZone) {
    try {
        return new Intl.DateTimeFormat("en-GB", {
            timeZone: timeZone,
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        }).format(date);
    } catch(e) {
        return "unknown date";
    }
}

function tick() {
    var now = new Date();

    var egyptTime = document.getElementById("egypt-time");
    var egyptDate = document.getElementById("egypt-date");
    var localTime = document.getElementById("local-time");
    var localDate = document.getElementById("local-date");
    var localTzLabel = document.getElementById("local-tz");

    if (!egyptTime) return;

    egyptTime.textContent = formatTime(now, "Africa/Cairo");
    egyptDate.textContent = formatDate(now, "Africa/Cairo");

    var localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    localTime.textContent = formatTime(now, localTZ);
    localDate.textContent = formatDate(now, localTZ);

    if (localTzLabel && localTzLabel.textContent === "") {
        localTzLabel.textContent = localTZ.replace(/_/g, " ");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    tick();
    setInterval(tick, 1000);

    // auto open/close based on summer months (june=5, july=6, august=7)
    var egyptMonth = new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" })).getMonth();
    var isSummer = egyptMonth >= 5 && egyptMonth <= 7;
    var badge = document.querySelector(".comm-status");
    var statusText = document.querySelector(".status-text");

    if (badge && statusText) {
        if (isSummer) {
            badge.classList.remove("closed");
            badge.classList.add("open");
            statusText.textContent = "Open for commissions";
        } else {
            badge.classList.remove("open");
            badge.classList.add("closed");
            statusText.textContent = "Closed — available summer only";
        }
    }
});