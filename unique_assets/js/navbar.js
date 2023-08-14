// This javascript file writes the navbar to the page during load and should be inserted in a script tag at the desired navbar location in the doc

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
if(filename.length < 2){
    filename = "index.html";
}

var writeDOM = `

    <div style="z-index: 999; position: fixed; height: 2%; background-color: black; padding: 0.9rem 0.9rem 0.9rem 0.9rem;">
        <p style="color: white;">
            <a href="index.html" style="color: white;">Home</a>
            <span style="color:black; user-select: none;">__</span>
            <a href="javascript:window.alert('Coming soon.');" style="color: white;">Clients</a>
            <span style="color:black; user-select: none;">__</span>
            <a href="javascript:window.alert('Coming soon.');" style="color: white;">Contact</a>
            <span style="color:black; user-select: none;">__</span>
            <a href="javascript:window.alert('Coming soon.');" style="color: white;">Pricing</a>
        </p>
    </div>

`;

/*

writeDOM = writeDOM.replace("[active page insert " + filename + "]", "active_navbar");
writeDOM = writeDOM.replace("[active page insert index.html]", "");
writeDOM = writeDOM.replace("[active page insert clients.html]", "");

writeDOM = writeDOM.replace("[visNum]", "");

*/

/*
try{
    if(filename == "index.html"){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://simple-analytics-d230138f5c63.herokuapp.com/analytics_core.php?property=sicknslick&modify=1&analytic=analytic_visits&mode=raw", false ); // false for synchronous request
        xmlHttp.send( null );
        writeDOM = writeDOM.replace("[visNum]","Visitor #" + xmlHttp.responseText);
    }else{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "https://simple-analytics-d230138f5c63.herokuapp.com/analytics_core.php?property=sicknslick&modify=0&analytic=analytic_visits&mode=raw", false ); // false for synchronous request
        xmlHttp.send( null );
        writeDOM = writeDOM.replace("[visNum]","Visitor #" + xmlHttp.responseText);
    }
}
catch{
    writeDOM = writeDOM.replace("[visNum]", "");
}
*/
//console.log(writeDOM);

document.write(writeDOM);