'use strict';
var fs = require('fs');
module.exports = {
    reporter: function (result, config, options) {
        var resultObj = {};
        for (var i = 0; i < result.length; i++) {
            if (resultObj[result[i].file]) {
                resultObj[result[i].file].push(result[i].error);
            } else {
                resultObj[result[i].file] = [];
                resultObj[result[i].file].push(result[i].error);
            }
        }
        /*
         * From createErrorReport
         * */
        var report = "",
            EOFMsg = "=================================X X X X X X X=================================\n", // End of File Msg
            number = 1;

        for (var key in resultObj) {
            report += "File : " + key;
            report += "\n";
            for (var i = 0; i < resultObj[key].length; i++) {
                report += "Error:\n\t";
                report += "Evidence : " + resultObj[key][i]["evidence"] + "\n\t";
                report += "Reason : " + resultObj[key][i]["reason"] + "\n\t";
                report += "Line : " + resultObj[key][i]["line"] + "\n\t";
                report += "Character : " + resultObj[key][i]["character"];
                report += "\n\n";
                number++;
            }
            number = 1;
            report += EOFMsg;
        }
        /*console.log(">>>>>>> From error report : ");
        console.log(report);*/
        /*
         * End createErrorReport
         * */
        fs.writeFile('message.txt', report, function (err) {
            if (err) {
                throw err;
            }
            console.log('It\'s saved!');
        })
    },

    // todo : this method is not being used with module.exports, need to see how to use it
    createErrorReport: function (rawReport) {
        console.log(">>>>>>> Inside createErrorReport");
        var report = "",
            EOFMsg = "=================================X X X X X X X================================="; // End of File Msg
        for (var key in rawReport) {
            report += key;
            report += "\n";
            for (var i = 0; i < rawReport[key].length; i++) {
                report += rawReport[key][i]["reason"];
                report += "\n";
            }
            report += EOFMsg;
        }
        console.log(">>>>>>> From error report : ");
        console.log(report);
        return report;
    }
};


