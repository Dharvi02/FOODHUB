import React ,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'


export default function Home() {

const [search,setSearch] = useState('');
const [foodCat,setFoodCat] = useState([]);
const [foodItem,setFoodItem] = useState([]);
const loadData = async()=>{
  let response = await fetch("http://localhost:5000/api/foodData",{
    method:"POST",
    headers:{
      "Content-Type" :"application/json"
    }
  })
  ;
  response = await response.json();
  setFoodItem(response[0])
  setFoodCat(response[1]);
 // console.log(response[0],response[1]);

}
useEffect(()=>{
  loadData()
},[]);
  return (
    <div>
        <div><Navbar/></div>


         <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner" id ="carousel">
      <div className="carousel-caption" style={{zIndex:"10"}}>
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?burger" alt="First slide"  width={"700px"} height={"500px"}/>
      </div>
      <div className="carousel-item">        
        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?pizza" alt="Second slide"/>
      </div>
      <div className="carousel-item">

        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?momos" alt="Third slide"/>
      </div>

    </div>

    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only"></span>
    </a>

    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only"></span>
    </a>
   
  </div></div>    


        <div className='container'>{
          foodCat!==[]
          ? foodCat.map((data)=>{
            return ( <div className="row mb-3">
        

              <div key ={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
              <hr/>

{foodItem !== []? foodItem.filter((item)=> (item.CategoryName === data.CategoryName)  && (item.name.toLowerCase().includes(search.toLowerCase())))
.map(filterItems =>{
return (
   <div key ={filterItems._id} className='col-12 col-md-6 col-lg-3'>
    <Card foodItem = {filterItems}
    options ={filterItems.options[0]}
    ></Card>
    </div>)
}) : <div> No data found </div> }

              </div> 
              )
          })
          :<div>""""""""""""</div>
        }
    
          
        </div>
        <div><Footer/></div>
        </div>
  )
}

