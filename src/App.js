// import './App.css';
import './categories.scss'

function App() {

  const categories=[
    {
      title:"Hats"
    },
    {
      title:"Jackets"
    },
    {
      title:"Sneakers"
    },
    {
      title:"Mens"
    },
    {
      title:"Womens"
    },

  ]


  return (
    <div className="App">
     <div className='categories'>

        {categories.map((category)=>(
          <div className='category-container'>
          {/* <img/> */}
          <div className='category-body'>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>

        </div>
        ))
        }
        
        
     </div>



    </div>
  );
}

export default App;
