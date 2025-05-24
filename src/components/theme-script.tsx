export const ThemeScript = () => {
  const themeScript = `
    (function() {
      try {
        var theme = localStorage.getItem('tecnoincas-theme') || 'theme-sun-stone-light';
        document.documentElement.className = theme;
      } catch (e) {
        document.documentElement.className = 'theme-sun-stone-light';
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
};
