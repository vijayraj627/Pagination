
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([])

  const [page, setPage] = useState(1)

  useEffect(()=>{
    fetchAPI();
  },[])

  const fetchAPI = async () => {
    try{

      const response = await fetch('https://dummyjson.com/products');

      const json = await response.json();

      setData(json.products);

      console.log(json.products)

    }
    catch(error){
      console.log(error)
    }
  }
  
  return (
    <div>
        {data.length>0 && data.slice(0,page*10).map((item)=>(
            <div key={item.id} className="imageClass">
            <img src={item.images[0]} alt="Image not found"/>
            </div>
        ))}
        <div className="pagination">
          <button className="btn btn-primary">Prev</button>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <button className="btn btn-primary">Next</button>
        </div>
    </div>
  );
}

export default App;
