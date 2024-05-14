import { createContext, useState } from "react";

//creo el contexto 
export const InmobiliariaContext = createContext();

//creo provider, aquí van estados y funciones actualizadoras globales
export const InmobiliariaProvider = ({children}) => {

    //estado para menú hamburguesa
    const [ menuHamburOpen, setMenuHamburOpen ] = useState(false);
    console.log("menuOp: ", menuHamburOpen)
    return (
        <InmobiliariaContext.Provider 
            value={{
                menuHamburOpen,
                setMenuHamburOpen,
            }}
        >
            {children}
        </InmobiliariaContext.Provider>
    );
};