
import './App.css';

function App() {
  return (
    <div className="container">
     <nav> 
      <img src='images/logo.png' className='logo' alt='logo' />
      <ul>
      <li>
        <a href='#'>Home </a>
      </li>

      <li>
        <a href='#'>Activity</a>
      </li>

      <li>
        <a href='#'>About Us </a>
      </li>


      </ul>
      <button className='btn' > 
        <img src='images/icon.png'  alt='icon' />
        Order
      </button>
     </nav>
{/* { header content } */}

    <div className='content'>
      <h1>
       Dangerous
        <br/>
    Weapons to explore

      </h1>
       <p>
    The sky turned a deep shade of orange as the sun began to set behind the mountains.<br />
    A gentle breeze moved through the trees, rustling the leaves softly.<br />
    Birds chirped in the distance, returning to their nests for the night.
  </p>
  {/* {form } */}
  <form>
    <input type='text' placeholder='Country Name' />
    <button type='submit'className='btn'>
      Search
    </button>
  </form>
    </div>

    </div>
  );
}

export default App;
