
d3.json("samples.json").then((data)=> {
    
    
   function init(){
    var i = Math.floor(((Math.random() * 153) + 1));
    var samp = data.samples[i];
    
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
       text: otuName
       
       
   }
   data = [trace1]
   layout = {
       title: "",
   }
   
   Plotly.newPlot("bar", data, layout)
}
    init()

   d3.selectAll("#selDataset").on("change", updatePlotly);
    function updatePlotly(){
        var dropdownMenu = d3.select("#selDataset").node();
        var dataset = dropdownMenu.property("value");
        var x = [];
        var y = [];
        for (d=0; d<153; d++){
            if (data
        }


    }
})


  