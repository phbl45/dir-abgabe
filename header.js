let appHeader = `
    <nav>
       <a href="index.html">Home</a>
       <a href="products.html">Produkte</a>
       <a href="aboutus.html">Über Blachware</a>
       <a href="contact.html">Kontakt</a>
       <a href="login.html">Anmelden</a>
    </nav>
`;

let appFooter = `
    <nav>
       <a href="bfe.html">Barrierefreiheitserklärung</a>
       <a href="copyright.html">Urheberrechtshinweise</a>
       <a href="licensing.html">Lizenz</a>
       <a href="privacy.html">Datenschutzerklärung</a>
       <a href="impressum.html">Impressum</a>
    </nav>
`;

window.onload = function() {
    document.getElementById("header").innerHTML = appHeader;
    document.getElementById("footer").innerHTML = appFooter;
}