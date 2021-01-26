//Find table based on SysId
function runQueryonTables() {
var outputJson = {};
    var tableList = [];
var outputList = [];
var query = 'sys_id=2f738cab0f3600105bc5e7b1d4767e3b';
var grTable = new GlideRecord('sys_db_object');
grTable.query();
while(grTable.next()) {
    tableList.push(grTable.name);
}

for(var  m=0; m<tableList.length; m++) {
    outputJson = runQuery(tableList[m], query);
    outputList.push(outputJson)
}
for(var k=0; k<outputList.length; k++) {
    gs.info(outputList[k].tableName + "=" + outputList[k].output);
}
}

function runQuery(tableName, query) {
    var output = '';
    var outputJson = {};
    var grQuery = new GlideRecord(tableName);
    grQuery.addEncodedQuery(query);
    grQuery();
    if(grQuery.next()) {
        output = grQuery.sys_id;
    }
    outputJson = {"TableName" : tableName, "output" : output};
    return(outputJson);
}