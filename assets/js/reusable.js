// footer
fetch('/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer-reusable-container').innerHTML = html;
    });

// navbar
fetch('/nav.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('nav-reusable-container').innerHTML = html;
    });
