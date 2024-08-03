import { useEffect, useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import type { Empresa } from "../../types";
import type { SubmitHandler } from "react-hook-form";

type Departamento = {
  id: number;
  departamento: string;
  ciudades?: [];
};

type FormData = {
    companyName: Empresa['nombre'],
    contactName: Empresa['nombreContacto'],
    phone: Empresa['celular'],
    address: Empresa['direccion'],
    region: Empresa['departamento'],
    city: Empresa['ciudadMunicipio'],
    email: Empresa['correo']
    location: Empresa['barrio']
}

export default function Form() {
  const [cities, setCities] = useState<string[]>();
  const [dptos, setDptos] = useState<Departamento[]>();
  const [dptoSelected, setDptoSelected] = useState<Departamento>();

  const { register, handleSubmit, formState: {errors} }  = useForm<FormData>()

  console.log(errors)
  useEffect(() => {
    async function getDptos() {
      const urlApi =
        "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json";
      const res = await fetch(urlApi);
      const data = await res.json();

      setDptos(data);
    }
    getDptos();
  }, [dptos]);

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = +e.target.value;
    if (value) {
      const updatedDpto = dptos?.filter((item) => item.id === value);
      if (updatedDpto) {
        setDptoSelected(updatedDpto[0]);
        setCities(updatedDpto[0].ciudades);
      }
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    let updatedData
    if(dptoSelected){
        updatedData = {...data, 
            region: dptoSelected.departamento
        }
    }

    console.log(updatedData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:flex gap-2">
        <div className=" flex flex-col mb-5 w-full lg:w-1/2">
          <label
            className="text-sm font-bold mb-1 text-slate-600"
            htmlFor="company-name"
          >
            Nombre del negocio
          </label>
          <input
            {...register("companyName", {required: true, minLength: 2})}
            className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300"
            id="company-name"
            type="text"
          />
        </div>

        <div className=" flex flex-col mb-5 w-full lg:w-1/2">
          <label
            className="text-sm font-bold mb-1 text-slate-600"
            htmlFor="contact-name"
          >
            Nombre de contacto
          </label>
          <input
            {...register("contactName", {required: true})}
            className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300"
            id="contact-name"
            type="text"
          />
        </div>
      </div>

      <div className="lg:flex gap-2">
        <div className=" flex flex-col mb-5 w-full lg:w-1/2">
          <label
            className="text-sm font-bold mb-1 text-slate-600"
            htmlFor="phone"
          >
            Celular
          </label>
          <input
            {...register("phone", {required: true})}
            className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300"
            id="phone"
            type="number"
            placeholder="+57 3101234567"
          />
        </div>

        <div className=" flex flex-col mb-5 w-full lg:w-1/2">
          <label
            className="text-sm font-bold mb-1 text-slate-600"
            htmlFor="email"
          >
            Correo
          </label>
          <input
            {...register("email", {required: true})}
            className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300"
            id="email"
            type="email"
          />
        </div>
      </div>

      <div className=" flex flex-col mb-5">
        <label className="text-sm font-bold mb-1 text-slate-600" htmlFor="city">
          Departamento
        </label>
        <select
          {...register("region", {required: true})}
          onChange={(e) => handleSelect(e)}
          className="w-full p-2 outline-0 focus:border-[#ed6730] border border-slate-300"
          id=""
        >
          <option selected disabled value="">
            Selecciona una opción
          </option>
          {dptos?.map((dpto) => (
            <option key={dpto.id} value={dpto.id}>
              {dpto.departamento}
            </option>
          ))}
        </select>
      </div>

      {cities && cities.length > 0 && (
        <div className=" flex flex-col mb-5">
          <label
            className="text-sm font-bold mb-1 text-slate-600"
            htmlFor="city"
          >
            Ciudad / Municipio
          </label>
          <select
            {...register("city", {required: true})}
            className="w-full p-2 outline-0 focus:border-[#ed6730] border border-slate-300"
            id=""
          >
            <option selected disabled value="">
              Selecciona una opción
            </option>
            {cities?.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className=" flex flex-col mb-5">
        <label
          className="text-sm font-bold mb-1 text-slate-600"
          htmlFor="location"
        >
          Barrio
        </label>
        <input
          {...register("location", {required: true})}
          className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300"
          id="location"
          type="text"
        />
      </div>

      <div className=" flex flex-col mb-5">
        <label
          className="text-sm font-bold mb-1 text-slate-600"
          htmlFor="address"
        >
          Dirección negocio
        </label>
        <input
          {...register("address", {required: true})}
          className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300"
          id="address"
          type="text"
        />
      </div>

      <button type="submit" className="bg-[#ed6730] text-white font-bold px-5 py-3 tracking-wider">
        SIGUIENTE
      </button>
    </form>
  );
}
