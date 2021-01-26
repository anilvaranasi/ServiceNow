// Write your scripts here to run (JavaScript executed on server)
var var record = new GlideRecord('table');
record.addQuery('name', value);
record.query();
while (record.hasNext()) {
    var row = record.next();
    
}