import { createContext, useState } from "react";

//creo el contexto 
export const InmobiliariaContext = createContext();

//creo provider, aquí van estados y funciones actualizadoras globales
export const InmobiliariaProvider = ({children}) => {

    //estado para menú hamburguesa
    const [ isOpenModalVideo, setisOpenModalVideo ] = useState(false);
    console.log("estadoM:", isOpenModalVideo)

    const handleIsOpen = () => {
        setisOpenModalVideo(true);
    }
    const handleIsClose = () => {
        setisOpenModalVideo(false);
    }

    return (
        <InmobiliariaContext.Provider 
            value={{
                isOpenModalVideo,
                handleIsOpen,
                handleIsClose,
            }}
        >
            {children}
        </InmobiliariaContext.Provider>
    );
};