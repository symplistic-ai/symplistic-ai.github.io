// footer
fetch('/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer-reusable-container').innerHTML = html;
    });

// navbar
fetch('/nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-reusable-container').innerHTML = html;

    // Once nav is injected, enable hover for dropdowns
    document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
      dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        this.classList.add('show');
        menu.classList.add('show');
      });

      dropdown.addEventListener('mouseleave', function () {
        const menu = this.querySelector('.dropdown-menu');
        this.classList.remove('show');
        menu.classList.remove('show');
      });
    });
  });