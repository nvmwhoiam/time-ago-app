export function timeAgo(timestamp) {
    // Calculate the time elapsed since or until the given timestamp
    const currentDate = new Date();
    const timestampDate = new Date(timestamp);
    let secondsDiff = (timestampDate - currentDate) / 1000;

    // Define time periods in seconds
    const minute = 60,
        hour = 3600,
        day = 86400,
        week = 604800,
        month = 2628000, // Approx. average month length in seconds (30.44 days)
        year = 31536000; // 365 days in seconds

    let unit, count, suffix;

    // Determine time direction and calculate time ago or time until
    if (secondsDiff < 0) {
        suffix = 'ago';
        secondsDiff = Math.abs(secondsDiff); // Make positive for calculation
    } else {
        suffix = 'in';
    }

    // Check for "just now" condition
    if (secondsDiff < 5) {
        return 'just now';
    }

    // Calculate time in the most appropriate unit
    if (secondsDiff < minute) {
        unit = 'second';
        count = secondsDiff;
    } else if (secondsDiff < hour) {
        unit = 'minute';
        count = Math.floor(secondsDiff / minute);
    } else if (secondsDiff < day) {
        unit = 'hour';
        count = Math.floor(secondsDiff / hour);
    } else if (secondsDiff < week) {
        unit = 'day';
        count = Math.floor(secondsDiff / day);
    } else if (secondsDiff < month) {
        unit = 'week';
        count = Math.floor(secondsDiff / week);
    } else if (secondsDiff < year) {
        unit = 'month';
        count = Math.floor(secondsDiff / month);
    } else {
        unit = 'year';
        count = Math.floor(secondsDiff / year);
    }

    // Pluralize the unit if count is not 1
    unit += (count !== 1) ? 's' : '';

    // Return the formatted string based on time direction
    return (suffix === 'ago') ? `${count} ${unit} ago` : `in ${count} ${unit}`;
}