export function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

const date = new Date()
date.toLocaleString( "en-US", { timeZone: "America/New_York" });

export var Day = date.getDate()