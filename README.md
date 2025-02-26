# Time Ago App

<div align="center">
  <h3>Modern Time Ago Calculator</h3>
  <p>A sleek, accessible, and intuitive relative time calculator tool.</p>
</div>

## 🌟 Overview

Time Ago App is a modern web application that provides human-readable relative time expressions. It features a beautiful UI with real-time calculation of time differences, showing them in a natural language format like "5 minutes ago" or "in 2 hours".

## ✨ Key Features

### 🎨 Time Calculations

- Real-time time difference calculation
- Support for multiple time units:
  ```javascript
  // Time Units Reference
  seconds: < 60 seconds      // e.g., "just now", "30 seconds ago"
  minutes: < 60 minutes      // e.g., "5 minutes ago", "in 45 minutes"
  hours:   < 24 hours       // e.g., "2 hours ago", "in 12 hours"
  days:    < 7 days         // e.g., "3 days ago", "in 5 days"
  weeks:   < 30 days        // e.g., "2 weeks ago", "in 3 weeks"
  months:  < 12 months      // e.g., "6 months ago", "in 9 months"
  years:   >= 12 months     // e.g., "1 year ago", "in 2 years"
  ```
- Past and future time support
- Dynamic time formatting

### ♿ Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimization
- Semantic HTML structure
- Live region updates

### 🎯 Technical Highlights

- Framework-free JavaScript
- Real-time calculations
- Natural language formatting
- Responsive design
- Dark/Light mode support

## 🗂️ Project Structure

```text
/assets
├── css/
│   ├── general/
│   │   ├── base.scss      # Base styles and variables
│   │   └── mixin.scss     # SCSS mixins
│   └── styles.scss        # Main stylesheet
└── js/
    ├── main.js           # Main application logic
    └── timeAgo.js        # Time calculation functions
index.html               # Main HTML file
```

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **SCSS/CSS3** - Modern styling with variables and mixins
- **Vanilla JavaScript** - Clean, modern JavaScript with no dependencies

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/nvmwhoiam/time-ago-app.git
   ```

2. **Navigate to project**

   ```bash
   cd time-ago-app
   ```

3. **Launch the application**
   - Open `index.html` in a browser, or
   - Use a development server (e.g., VS Code Live Server)

## 🧪 Example Time Inputs

Test the calculator with these example times:

- Past Times:

  - 1 hour ago
  - 1 day ago
  - 1 week ago
  - 1 month ago
  - 1 year ago

- Future Times:
  - In 1 hour
  - In 1 day
  - In 1 week
  - In 1 month
  - In 1 year

## 🔮 Future Enhancements

- Custom time formats
- Multiple language support
- Calendar view integration
- Time zone support
- Configurable time thresholds
- Copy to clipboard functionality
- Share time link feature

## 📬 Contact

If you have any questions or need assistance, please feel free to reach out. You can contact me at [info@lynqis.io](mailto:info@lynqis.io) or open an issue on the [GitHub Repository](https://github.com/nvmwhoiam/time-ago-app).

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- nvmwhoiam
- Website: [lynqis.io](https://lynqis.io)
- GitHub: [GitHub Profile](https://github.com/nvmwhoiam/)
