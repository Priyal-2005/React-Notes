import './App.css'

function App() {
  let name = "Priyal";
  return(
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id consectetur neque, quas dolorum suscipit corporis magni ad quo maiores perspiciatis.</p>
    </div>
    </>
  );
}

export default App