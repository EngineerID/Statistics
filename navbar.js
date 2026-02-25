document.addEventListener("DOMContentLoaded", function() {
    // Check if we are in a subfolder
    const isSubfolder = window.location.pathname.includes('/tools/') || window.location.pathname.includes('/indexes/');
    const prefix = isSubfolder ? "../" : "";

    const navHTML = `
        <nav class="navbar">
            <a href="${prefix}index.html">Home</a>
            <a href="${prefix}lexicon.html">Lexicon</a>
            <a href="${prefix}tools/sql.html">SQL</a>
            <a href="${prefix}tools/python.html">Python</a>
            <a href="${prefix}tools/R.html">R</a>
            <a href="${prefix}indexes/english-index.html">English Index</a>
            <a href="${prefix}indexes/serbian-index.html">Serbian Index</a>
        </nav>
    `;
    
    document.getElementById("nav-placeholder").innerHTML = navHTML;
});