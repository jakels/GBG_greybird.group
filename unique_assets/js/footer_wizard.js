// This javascript file writes the footer as the page is loading

var writeDOM_footerWizard = `

<footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2023 - <span id="fillYear"></span> GreyBird Marketing Group &middot; Website Developed & Designed by <a href="https://greybird.group">GreyBird Group</a> (assigned developer <a href='mailto:jake@greybird.group'>jake@greybird.group</a>)</p>
    <script>document.getElementById("fillYear").innerHTML = new Date().getFullYear();</script>
</footer>

`;

document.write(writeDOM_footerWizard);