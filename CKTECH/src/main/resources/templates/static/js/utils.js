const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
# Employee Directory Web Interface

## 🔧 Setup
- Open `dashboard.ftlh` using a Freemarker-enabled setup (or simulate using plain `index.html`)
- No backend required. Data is handled in memory via `data.js`.

## 📁 Project Structure
- `/templates`: Freemarker templates
- `/static/css`: Stylesheets
- `/static/js`: JavaScript files

## 📸 Screenshots
(Add screenshots of dashboard, form, filters, etc.)

## 🧠 Reflection
### Challenges
- Simulating Freemarker without a Java backend
- Handling form validation in pure JS

### Improvements
- Use localStorage to persist data
- Add animations and transitions
- Use component-based structure with a modern bundler

