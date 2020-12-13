d3.json("samples.json", function(data){
    console.log(data)
})
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  