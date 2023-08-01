// This javascript file writes the navbar to the page during load and should be inserted in a script tag at the desired navbar location in the doc

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
if(filename.length < 2){
    filename = "index.html";
}

var writeDOM = `

<header data-bs-theme="dark">
    <nav class="navbar navbar-expand-md fixed-top" style="background-color: rgb(240, 240, 240);">
        <div class="container-fluid">
            <a href="index.html"><img src="/unique_assets/images/site_media/site_logo.png" style="height: 40px; margin-right: 25px;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse" style="margin-bottom: 5px;">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                    <a class="nav-link [active page insert index.html]" aria-current="page" href="index.html" style="color: black;">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link [active page insert clients.html]" aria-current="page" href="clients.html" style="color: black;">Our clients</a>
                    </li>
                </ul>
            </div>
            <div style="margin-right : 0px;">
                <p style="text-align:left;">[visNum]</p>
            </div>
        </div>
    </nav>
</header>

`;

writeDOM = writeDOM.replace("[active page insert " + filename + "]", "active_navbar");
writeDOM = writeDOM.replace("[active page insert index.html]", "");
writeDOM = writeDOM.replace("[active page insert clients.html]", "");

writeDOM = writeDOM.replace("[visNum]", "");

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
console.log(writeDOM);

document.write(writeDOM);