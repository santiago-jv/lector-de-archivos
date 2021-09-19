import React from "react";

const Lector =()=>{
    return(
        <div className="container mt-5">
 <div className="card text-center">
        <div className="card-header  row">
        <div className="col-6 mt-4 ">
        <h4 >Lector de Textos</h4>
        </div>
   
          
          <ul className="nav col-12 col-lg-auto my-2 justify-content-end my-md-0 text-small">
      
        <li className="nav-item">
              
              <div className="btn btn-outline-primary " type="button">
              <span className="button-text"></span>
              <input className="form-control-sm" type="file" id="formFile"/>
              </div>
              
          </li>
     
            

            <li className="nav-item ">
              <button className="btn btn-outline-success ">Revisar Palabra</button>
            </li>
          </ul>
        </div>
        <div className="container p-4 contenido">
        <div className="card-body border bg-light scrollable h-100" placeholder="Aquí estará el texto">
         
         <code className="card-text ">Aquí el texto != </code>
        
       </div>
        </div>
        
      </div>
        </div>
       
    );
};

export default Lector;