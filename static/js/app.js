
d3.json("samples.json").then((data)=> {
    var i = Math.floor(((Math.random() * 153) + 1));
    var samp = data.samples[i];
    var v = d3.select("#selDatasheet")
   //length of sample is 153
   console.log(samp);
   console.log(i);
   var otuIds = samp.otu_ids.slice(0, 10)
   var sampVal = samp.sample_values.slice(0, 10)
   var otuName = samp.otu_labels.slice(0, 10)
   
   console.log(otuIds)
   console.log(sampVal)
   console.log(otuName)
   var trace1 = {
       x: sampVal,
       y: otuIds,
       type: "bar",
       orientation: "h",
       
   }
   data = [trace1]
   layout = {
       title: "attempt",
       label: otuName

   }
   
   Plotly.newPlot("bar", data, layout)
})


  