import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faSearch} from "@fortawesome/free-solid-svg-icons";
import {faFile, faFileLines, faSave} from '@fortawesome/free-regular-svg-icons'
const SecondColumn = () => {

    const btns = ["add"]

    const [reportes, setReportes] = useState([
        {
            name: 'Ventas del mes actual',
            created_by: 'Usuario 1',
            description: 'detalle de ventas del mes actual'
        }, {
            name: 'Ventas del mes anterior',
            created_by: 'Usuario 2',
            description: 'detalle de ventas del mes anterior'
        }, {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        },
        {
            name: 'Ventas del 2032',
            created_by: 'Usuario 3',
            description: 'detalle de ventas del año actual'
        }
    ])
    return <>

        <div className="w-[50%] h-[100vh] overflow-hidden border">

            {/* Busqueda */}
            <div className="overflow-hidden transition-all w-full p-5 border">
                <div className={`flex p-1 border rounded-full bg-white w-[calc(100%-50px)]`}>
                    <input type="text" className="font-open text-sm text-[18px] focus:outline-none w-[calc(100%-50px)] h-[30px] mx-2 border"
                        placeholder={'busqueda'}
                        onChange={
                            () => (console.log('xd'))
                        }/>
                    <FontAwesomeIcon icon={faSearch}
                        className="m-2"/>
                </div>
            </div>

            {/* Botones  */}

            <div className="w-full overflow-hidden flex border">
                <div className="h-full w-[calc(100%-70px)] overflow-hidden flex justify-end border p-2">
                    <button type="button" className="bg-blue-300 h-full w-[10%] text-[20px] rounded text-neutral-600">
                        <FontAwesomeIcon icon={faAdd}/>
                    </button>
                </div>

            </div>

            {/* Lista de Reportes  */}
            <div className="h-[90vh] overflow-y-auto border p-5">

                {
                reportes ?. map((item) => (
                    <div className="w-full flex justify-normal items-center border cursor-pointer my-5 hover:bg-gray-100">
                        <div className="text-blue-400 text-[50px] w-[10%]">
                            <FontAwesomeIcon icon={faFileLines}/>
                        </div>
                        <div className="w-[90%] text-[16px] p-3">
                            <h3>{item.name}</h3>
                            <p>{item.created_by}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            } </div>

        </div>
    </>
}

export default SecondColumn
