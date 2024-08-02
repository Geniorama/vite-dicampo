import DicampoLogo from "./assets/Dicampo - Logo fondo transparente.png";
import Form from "./components/Form/Form";
import "./App.css";
import client from "./lib/contentful";
import React, { useEffect, useState } from "react";
import type { Empresa } from "./types";

function App() {
  const [data, setData] = useState<Empresa[]>()

  useEffect(() => {
    client.getEntries({
      content_type: "empresa"
    })
    .then((response) => {
      const empresas = response.items.map(item => ({
        id: item.sys.id,
        ...item.fields
      })) as Empresa[];
      setData(empresas);
    })
    .catch(console.error);
  }, []);

  if(data){
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="max-w-[600px] mx-auto w-full">
        <img className="max-w-[300px] mx-auto" src={DicampoLogo} alt="" />
        <Form />
      </div>
    </div>
  );
}

export default App;
