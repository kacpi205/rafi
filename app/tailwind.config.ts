const { join } = require('path');

module.exports = {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx,blade,php,blade.php}'),
'
  ],
  theme: {
    extend: {},
  },
  plugins: [],

};

