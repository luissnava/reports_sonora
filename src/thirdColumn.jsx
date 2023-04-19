import React from 'react'

const ThirdColumn = ({props}) => {
  return (
    <div className="h-full w-full flex align-top items-strech flex-row max-h-[calc(100vh-63px)] overflow-hidden border border-stone-800">
        <div className="col1 w-[334.84px] bg-white h-full overflow-hidden transition-all lg:px-[42px]">
            <h3>Tercera Columna</h3>
        </div>
        <div className="col2 w-[414px] relative bg-libellum-body h-full overflow-auto transition-all pt-5 dark:bg-libellum-dark-v">
            <div className="px-5">
                <div className={`flex items-center justify-between px-5 border border-libellum-border rounded-full bg-white w-full dark:bg-form-btns dark:border-dark-border`}>
                    <input type="text" className="font-open text-sm text-dark-blue placeholder:text-gray_alter placeholder:text-sm focus:outline-none w-[calc(100%-32px)] dark:bg-form-btns dark:text-icons-gray dark:placeholder:text-icons-gray" placeholder={"busqueda"} onChange={()=>(console.log("hola"))} />
                    
                </div>
            </div>
            <div className="flex justify-end items-center">
                <div className="flex justify-end items-center md:px-5 px-[11px]">
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ThirdColumn
