//Find table based on SysId
//Developed by Srinivas Anil Kumar Varanasi
//This script should be run as admin user in global scope
//Script gives output as table name and sysId
//Find table based on sys_id.
runQueryonTables();

function runQueryonTables() {
    var sLog = '';
    var outputJson = {};
    var tableList = [];
    var outputList = [];
    var sysId = '2f738cab0f3600105bc5e7b1d4767e3b';
    var query = 'sys_id=2f738cab0f3600105bc5e7b1d4767e3b';
    var grTable = new GlideRecord('sys_db_object');
    grTable.query();
    while (grTable.next()) {
        tableList.push(grTable.name + '');
    }
    for (var m = 0; m < tableList.length; m++) {
        outputJson = runQuery(tableList[m], sysId);
        outputList.push(outputJson);
    }
    for (var k = 0; k < outputList.length; k++) {
		if(outputList[k].output.length >0) {
        sLog += outputList[k].tableName + "=" + outputList[k].output + "\n";
			}
    }
    gs.print("Tables matching sys_id =" + sLog);
}

function runQuery(tableName, sysId) {
    var output = '';
    var outputJson = {};
    try {
        var grQuery = new GlideRecord(tableName);
        grQuery.query('sys_id', sysId);
        grQuery.query();
        if (grQuery.next()) {
            output = grQuery.sys_id + '';
        }
    } catch (err) {
        output = 'no access to table ' + err;
    }
    outputJson = {
        "tableName": tableName,
        "output": output
    };
    return (outputJson);
}