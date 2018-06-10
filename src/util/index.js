export default {
    math: {
        randInt: function (from, to) {
            /**
             * @param from - include
             * @param to - include
             */
            return Math.floor(Math.random() * (to + 1 - from)) + from;
        }
    },
    string: {
        escapeHTML: function (str) {
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/\//g, '&#x2F;');
        },
        padding: function (str, format) {
            format = format.split('.');
            if (format.length === 3) {
                return str.padStart(format[0].length).padEnd(format[2].length);
            } else {
                return str.padStart(format[0].length);
            }
        }
    },
    array: {
        randomIn: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
    },
    getUnixTimeStamp: function (offset = 0) {
        return (new Date()).getTime() / 1000 - offset;
    },
    awaitTimeout: async function (delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    }
};
