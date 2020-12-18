
d3.json("samples.json").then((data) => {


    function unpack(rows, index) {
        return rows.map(function (row) {
            return row[index];
        });
    }
    


    for (var d = 0; d < data.names.length; d++) {
        d3.select("#selDataset").append("option").text(data.names[d]).attr('value', data.names[d])
    }
  //  d3.selectAll("#selDataset").on("change", ()=>updatePlotly(data));

  d3.selectAll("#selDataset").on("change", ()=>init(data));
    



   
    init(data)


    
    
})
function init(data) {
    //var i = Math.floor(((Math.random() * 153) + 1));
    // var index=data.names.indexOf(id);
    // var ids=data.samples[index].otu_ids
    //var samp = data.samples[0];
    // console.log(ids)

    //length of sample is 153
    // console.log(samp);
    // console.log(i);
    
    // var otuIds = ids.slice(0, 10)
    // var sampVal = data.samples[index].sample_values.slice(0, 10)
    // var otuName = data.samples[index].otu_labels.slice(0, 10)

    var subj = parseInt(d3.select("#selDataset").property("value"))
    console.log(subj)
    var samp = data.samples.filter(m => +m.id === subj)[0];
    
    var otuIds = samp.otu_ids.slice(0, 10)
    var sampVal = samp.sample_values.slice(0, 10)
    var otuName = samp.otu_labels.slice(0, 10)


    console.log(`These are the otu_ids ${otuIds}`)
    console.log(sampVal)
    console.log(otuName)

    var trace1 = {
        x: sampVal,
        y: otuIds,
        type: "bar",
        orientation: "h",
        text: otuName


    }
    data1 = [trace1]
    layout = {
        title: "",
    }

    Plotly.newPlot("bar", data1, layout)
    trace2 = {
        x: otuIds,
        y: sampVal,
        mode: "markers",
        text: otuName,
        marker: {
            color: otuIds,
            size: sampVal
        }
    }
    data2 = [trace2]
    Plotly.newPlot("bubble", data2)
    //var meta = data.metadata



    var subj = parseInt(d3.select("#selDataset").property("value"))
    console.log(subj)
    var meta = data.metadata.filter(m => m.id === subj);
    var mkey = []
    var mval = []
    meta.forEach((metaSet) => {
        console.log(metaSet)
        //d3.select("#sample-metadata").text(Object.entries(metaSet))
        Object.entries(metaSet).forEach(([key, value]) => {
            console.log(`Key: ${key} and Value ${value}`);

            d3.select("#sample-metadata").text(Object.entries(metaSet))

        })
    })





}
function updatePlotly(data) {
    
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
    var x = [];
    var y = [];
    var text = []
    console.log(`This is the dataset i am working with ${dataset}`)
    //data.samples.map(sample=>sample.id)
    console.log(data.samples.map(sample=>sample.id))
    
    for (var p = 0; p < data.samples.length; p++) {
       
        
        if (dataset === data.samples[p].id) {
            
            x.push(data.samples[p].sample_values.slice(0, 10))
            y.push(data.samples[p].otu_ids.slice(0, 10))
            text.push(data.samples[p].otu_labels.slice(0, 10))
            // console.log(x, y, text)
           
            // Plotly.newPlot("bar", "x", [x])
            // Plotly.newPlot("bar", "y", [y])
            // Plotly.newPlot("bar", "text", [text])
            // Plotly.newPlot("bubble", "x", [y])
            // Plotly.newPlot("bubble", "y", [x])
            // Plotly.newPlot("bubble", "text", [text])
            Plotly.restyle("bar", "x", [x])
            Plotly.restyle("bar", "y", [y])
            Plotly.restyle("bar", "text", text)
            Plotly.restyle("bubble", "x", [y])
            Plotly.restyle("bubble", "y", [x])
            Plotly.restyle("bubble", "text", text)
            // console.log(text)
            break;
        } 
    } 
    // console.log(Object.keys(dataset))
    // console.log(Object.values(dataset))
    // console.log(Object.entries(dataset))
    console.log(`THis is the x array ${x}`)
    console.log(`THis is the y array ${y}`)
    

} 

