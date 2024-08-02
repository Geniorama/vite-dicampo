
export default function Form() {
  return (
    <form action="">
        <div className=" flex flex-col mb-5">
            <label className="text-sm font-bold mb-1 text-slate-600" htmlFor="company-name">Nombre del negocio</label>
            <input className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300" id="company-name" type="text" />
        </div>

        <div className=" flex flex-col mb-5">
            <label className="text-sm font-bold mb-1 text-slate-600" htmlFor="contact-name">Nombre de contacto</label>
            <input className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300" id="contact-name" type="text" />
        </div>

        <div className=" flex flex-col mb-5">
            <label className="text-sm font-bold mb-1 text-slate-600" htmlFor="phone">Celular</label>
            <input className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300" id="phone" type="number" placeholder="+57 3101234567"/>
        </div>

        <div className=" flex flex-col mb-5">
            <label className="text-sm font-bold mb-1 text-slate-600" htmlFor="email">Correo</label>
            <input className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300" id="email" type="email" />
        </div>

        <div className=" flex flex-col mb-5">
            <label className="text-sm font-bold mb-1 text-slate-600" htmlFor="city">Ciudad / Municipio</label>
            <input className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300" id="city" type="text"/>
        </div>

        <div className=" flex flex-col mb-5">
            <label className="text-sm font-bold mb-1 text-slate-600" htmlFor="location">Barrio</label>
            <input className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300" id="location" type="text"/>
        </div>

        <div className=" flex flex-col mb-5">
            <label className="text-sm font-bold mb-1 text-slate-600" htmlFor="address">Dirección negocio</label>
            <input className="w-full p-2 outline-none focus:border-[#ed6730] border border-slate-300" id="address" type="text"/>
        </div>
        
        <button className="bg-[#ed6730] text-white font-bold px-5 py-3 tracking-wider">
            SIGUIENTE
        </button>
    </form>
  )
}
