import React, {useState} from 'react'

const FirstColumn = () => {

    let lista = [
        'Todos',
        'Sonora',
        'Reforma',
        'Polanco',
        'Anzures'
    ]

    const [activate, setActivate] = useState(null)

    const itemSelected = (event) => {
        setActivate(event.target.id)
    }
    return (
        <div className="h-[100vh] w-[30%] min-h-[calc(100vh - 0px)] flex-row overflow-hidden border justify-center">
            <div className="w-full h-full overflow-hidden transition-all items-center">
                <h3 className='text-[32px] mt-5 p-5'>Reportes</h3>
            </div>

            <div className="categorias h-full max-h-[calc(100vh-230px)] w-full p-10">
                <ul> {
                    lista ?. map((item, index) => (
                        <li id={index}
                            key={index}
                            className={`mt-4 p-3 text-[15px] font-sans text-sm ${activate == index ? 'bg-red-200': ''} rounded-[10px] text-neutral-500 cursor-pointer transition-all`}
                            onClick={
                                (event) => (itemSelected(event))
                            }>
                            {item.toUpperCase()}</li>
                    ))
                } </ul>
            </div>
        </div>
    )
}

export default FirstColumn
