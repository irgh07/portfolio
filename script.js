document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');

  if (header) {
    const setHeaderStyle = () => {
      if (window.scrollY > 12) {
        header.style.boxShadow = '0 10px 24px rgba(0,0,0,0.15)';
      } else {
        header.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', setHeaderStyle);
    setHeaderStyle();
  }
});