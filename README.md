# Dev Stack Builder

A small React app where you can pick your favorite technologies and build your own dev stack. Click "Add to Stack" on any card and it shows up in the side panel.

## 🔗 Live Site

(https://hero-assign-05-saiful.netlify.app)

## 📸 Preview

![Dev Stack Builder Preview](./src/assets/preview-1.png)

## 🛠️ Built With

- React.js (with Vite)
- Tailwind CSS + DaisyUI
- JavaScript (ES6+)
- React-Toastify
- JSON (for tech data)

## ✨ 3 Features

1. **Add to Stack** — Click a button to add any tech. Adding the same one twice shows a warning toast. Once added, the button says "✓ Added to Stack" and gets disabled.

2. **Your Stack Panel** — Shows everything you picked, with a ✕ to remove each one and a "Remove All" button. Empty stack shows a friendly message.

3. **Responsive Design** — 3 columns on desktop, 2 on tablet, 1 on mobile. Navbar turns into a hamburger menu on small screens.


## 📝 React Questions

**1. What is JSX, and why is it used in React?**
JSX is HTML-like code written inside JavaScript. React uses it because it makes components easier to read and write.

**2. Difference between props and state?**
Props come from the parent and can't be changed. State lives inside the component and can change over time.

**3. What does useState do, and where did you use it?**
It stores a value that can change. I used it for the tech list, the stack items, and the loading flag.

**4. What does useEffect do, and why did you need it for JSON?**
It runs code after render. I used it to fetch the JSON file once when the page loaded.

**5. Why does every .map() item need a unique key?**
So React can tell which item is which when the list changes and only update what actually changed.

**6. What is conditional rendering? One place you used it?**
Showing different things based on a condition. I used it in the "Your Stack" panel — empty message vs. item list.

**7. How does a parent pass data to a child, and how does a child send something back?**
Parent sends data down through props. Child calls a function passed by the parent to send something back up.

## 👤 Author

**SAIFUL ISLAM**
- GitHub:(https://github.com/saifulcodezone)
