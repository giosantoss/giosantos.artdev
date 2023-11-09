import React,{createContext,useContext,useState} from 'react'

const ProjectsContext = createContext();

export function ProjectsProvider({children}) {
    const [selectedId,setSelectedId] = useState(null)
    const [active,setActive] = useState(0)
    const [isOpen,setIsOpen] = useState(false)

    return (
        <ProjectsContext.Provider 
        value={{
                selectedId,
                setSelectedId,
                active,
                setActive,
                isOpen,
                setIsOpen
            }}>

            {children}
        </ProjectsContext.Provider>
    );
}

export function useProjects(){
    return useContext(ProjectsContext);
}