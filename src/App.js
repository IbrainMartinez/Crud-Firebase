import { async } from "@firebase/util";
import { useEffect, useState } from "react";

import { SavePersonName, getPersons, deletePerson, updatePerson } from "./Api"

function App() {

  const [personName, setPersonName] = useState(null);
  const [personaId, setPersonaId] = useState(null);

  const [persons, setPersons] = useState(null);

  const SavePerson = async () => {
    await SavePersonName(personName)
    getPersonData()
  }

  useEffect(() => {
    getPersonData()
}, [])
  const getPersonData = async () => {
    const p = await getPersons();
    setPersons(p.docs);
    getPersonData()
  }

  const removePerson = async() => {
    await deletePerson(personaId)
    getPersonData();
  } 

  const updatePersonData = async() =>{
    await updatePerson(personaId, personName);
    getPersonData();
  }
  return (
    <>
      <div className="container">
        <br />
        <h1 className="text-center">Hola FireBase</h1>
        <h3>Formulario Con FireBase</h3>

        <div className="mb-3">
          <label className="form-label">Nombre</label>

          <input type="text" className="form-control" name="nombre" placeholder="ID" onChange={e => setPersonaId(e.target.value)} />
          <input type="text" className="form-control" name="nombre" placeholder="Escribe tu Nombre" onChange={e => setPersonName(e.target.value)} />
          
        </div>
        {/* <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input type="text" className="form-control" name="apellido" placeholder="Escribe tu Apellido"/>
            </div> */}


        <button className="btn btn-primary" type="submit" value="enviar" onClick={SavePerson}>Enviar</button>
        <button className="btn btn-primary" onClick={removePerson}>Elminar</button>
        <button className="btn btn-primary" onClick={updatePersonData}>Actualizar</button>

        <table className  ="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{
                persons && persons.map(p =><p>{p.id}</p>)
              }</td>
              <td>{
                persons && persons.map(p =><p>{p.data().name}</p>)
              }</td>
              


            </tr>

          </tbody>
        </table>


      </div>
    </>
  );
}

export default App;
