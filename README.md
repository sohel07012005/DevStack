->>>>>> Dev Stack
A simple and modern web application for developers to explore useful technologies, tools, and resources.

->>>>>> Technologies Used
React
TypeScript
Tailwind CSS
React Icons
JSON
npm vite

->>>>>> Main 3 Features :
1.Technology Explorer 
Browse different technologies with their names, icons, and details.
2.Add to Stack
Add your favorite technologies to stack.
3.Remove from Stack
Easily remove technologies from your stack .

->>>>>>  What is JSX, and why is it used in React?
JSX makes opportunity to write HTML-like code inside JavaScript.It makes React components easier to write and understand.

->>>>>>  What is the difference between props and state?
Props are data passed from a parent to a child.
State is data that belongs to a component and can change.

->>>>>> What does the `useState` hook do, and where did you use it in this project?
useState hook stores data that can change in a component.I used it to manage the stack and update it when items are added or removed.

->>>>>> What does the `useEffect` hook do, and why did you need it to load the JSON data?
useEffect runs code when something happens, such as when a component loads.useEffect is used because loading data is a side effect.

->>>>>>  Why does every item in a `.map()` list need a unique `key` prop?
The key helps React identify each item uniquely in the list.

->>>>>>  What is conditional rendering? 
Conditional rendering means showing something only when a condition is true/false.
{stack.length === 0 && (
  <p>Your stack is empty.</p>
)}
In this project when stack zero it shows empty stack . And when stack has present any items that shows those .

->>>>>>  How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
The parent sends data to the child using props.The child can send something back by calling a function passed through props.
