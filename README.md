# React.js Mega Overview 
This project is an overview of many of the **React.js** components and features.
---
![React Components](./public/board.png)

---

## 🚀 Components
- NumbersList: Goes through an array and **map the values to a list**.
- UsersInfo: Goes through an array of json objects and **renders the values to divs**.
- UserProfile: Receives **user details from props and renders them in a div**. The props come from a parent component.
- PrivateContent: Handles **conditional rendering**, depending on the value of a prop received from the parent component. Used the ternary operator instead of an if statement to render the content.
- ClickMe: **Handles an event** when clicking on a button.
- UpdateUsername: **Updates a state** with a **form input value**. Using **useState**.
- TodoList: **Updates a state**, a todo list, with items from a text input field. Also **removes items from the list**, updating the state when clicking on the item. Used the array method **array.filter()** to remove a specific item from the list.
- Popup: **Shows a popup that renders outside of the app root container.** It runs in a separate div and it's independent from the rest of the app. It was created using **createPortal**. There is button on the main app component that controls the visibility of this popup.
- ThemeSwitcher: This component uses the **useState** hook and a **switch structure to change the app main CSS classes**, changing the app color theme, choosing from 3 themes that are set clicking on a button.

## 🛠️ Tech Stack
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)


---
## 📦 Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/ritaCosta93/react-overview.git
cd react-overview
npm install