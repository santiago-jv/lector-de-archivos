import React,{useState} from "react";
import { Form } from "react-bootstrap";

const Lector =()=>{
	const [textFile, setTextFile] = useState(null);
	const [file, setFile] = useState(null)
	const handleFile = (event) => {
	  	const file = event.target.files[0];
		if(file) {
			setFile(file)
		}
	}

	const listWords = ()=> {
		if(file) {
			const reader  = new FileReader();
  
			reader.onload = (event) => {
				let content = event.target.result;
				console.log(content)
				const invalidCharacters = [' ', '\n', '\r','\t']
				content = Array.from(content).map((character) => {
				if(!invalidCharacters.includes(character)){
					return character;
				}
				return '';
				})
				console.log(content)
				
				let words = []
				let helper = ''
				for (const character of content) {
				if(character !== '' ){
					helper += character;
				}
				else{
					words.push(helper)
					helper = ''
				}
				}
				
				console.log(words)
		
				words = words.filter(word=>word !== '')
				
				console.log(words)
				let startIndex=null, lastIndex=null;

				const deleteComments = () => {
					console.log(startIndex, lastIndex)
					const array1 = words.slice(0,startIndex);
					const array2 = words.slice(lastIndex+1,words.length);
					console.log("primera parte: ",array1)
					console.log("Segunda parte: ",array2)
	
					words = array1.concat(array2)
					console.log(words)
				
				}
				let word;
				for (let index = 0; index < words.length; index++) {
					word = words[index]

					if(word[0] === "/" && word[1] === "*" ) {
						//aqui inicia
						startIndex=index
					}
					else if ( word[word.length-2]=== "*" && word[word.length-1] === "/" ) {
						//aqui el fin
						lastIndex = index;
					}
					if(startIndex !== null && lastIndex !== null) {
						deleteComments()
						index=0
						startIndex = null
						lastIndex = null
					}
					
				}
		

				
				
				setTextFile(words)
			}
			reader.readAsText(file)
		}
		else {
			alert("No ha adjuntado un archivo.")
		}
	}


    return(
      <div className="container mt-5">
        <div className="card">
          <div className="card-header  row">
            <div className="col  mt-4 ">
              <h2 className="text-center" >Lector de Archivos</h2>
            </div>
   
			<div>
				<ul className="nav col-12 col-lg-auto my-2 justify-content-center align-items-center my-md-0 text-small">
			
				<li className="nav-item">
					
					<div className="">
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Adjunta un archivo .cpp</Form.Label>
							<Form.Control type="file" accept=".cpp" onChange={handleFile}/>
						</Form.Group>
					</div>
					
				</li>

				<li className="nav-item ">
					<button onClick={listWords} className="btn btn-outline-success">Listar Palabras</button>
				</li>
				</ul>
			</div>
          </div>
          <div className="container p-4 contenido">
            <div className="p-4 border bg-light" >
         
              	<code className="card-text">
					{!textFile? "No hay un archivo subido aún.":
					
						textFile.map((word,index) => {
							return <p key={index}>{word}</p>   
						})
					} 
				</code>
        
            </div>
          </div>
        
        </div>
      </div>
       
    );
};

export default Lector;