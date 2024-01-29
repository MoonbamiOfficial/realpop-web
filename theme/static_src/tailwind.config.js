/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
  content: [
    /**
     * HTML. Paths to Django template files that will contain Tailwind CSS classes.
     */

    /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
    '../templates/**/*.html',

    /*
      * Main templates directory of the project (BASE_DIR/templates).
      * Adjust the following line to match your project structure.
      */
    '../../templates/**/*.html',

    /*
      * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
      * Adjust the following line to match your project structure.
      */
    '../../**/templates/**/*.html',

    /**
     * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
     * patterns match your project structure.
     */
    /* JS 1: Ignore any JavaScript in node_modules folder. */
    // '!../../**/node_modules',
    /* JS 2: Process all JavaScript files in the project. */
    // '../../**/*.js',

    /**
     * Python: If you use Tailwind CSS classes in Python, uncomment the following line
     * and make sure the pattern below matches your project structure.
     */
    // '../../**/*.py'
  ],
  theme: {
    extend: {
      colors: {
        'cetacean-blue': '#150050',
        'electric-pink': '#FB2576',
        'deep-violet': '#3F0071',

        // Using legacy `rgba`
        'opaque-black': 'rgba(var(--black), 0.5)',
        'opaque-white': 'rgba(var(--white), 0.2)',
        'opaque-deep-violet': 'rgba(var(--deep-violet), 0.5)',
        'opaque-electric-pink': 'rgba(var(--electric-pink), 0.8)',
        'header-black': 'rgba(var(--black), 0.8)',
        'header-white': 'rgba(var(--white), 0.8)',
        },
        container: {
          center: true,
        },
        screens: {
          'xs': '475px',
          'premium': '1920px',
        },
        dropShadow: {
          'shop-now-btn': '0px 0px 16px rgba(251, 37, 118, 1)',
          'send-msg-btn': '0px 0px 8px rgba(251, 37, 118, 1)',
        }
    },
  },
  plugins: [
    /**
     * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
     * for forms. If you don't like it or have own styling for forms,
     * comment the line below to disable '@tailwindcss/forms'.
     */
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
