import React, { createContext, useState } from 'react'
import ChildrenProps from 'types/children'

type DataContextType = {
    options: MenuProps
    setOptions: React.Dispatch<React.SetStateAction<MenuProps>>
}

type MenuProps = {
    selected: 'clients' | 'sales'
}

export const DataContext = createContext({} as DataContextType)

const AppContext: React.FC<ChildrenProps> = ({ children }) => {
    /*
     *   CONTEXT
     */

    /*
     *   REFS
     */

    /*
     *   STATES
     */

    const [options, setOptions] = useState<MenuProps>({ selected: 'clients' })

    /*
     *   HOOKS
     */

    /*
     *   LAYOUT
     */

    /*
     *   FORMIK
     */

    /*
     *   FUNCTIONS
     */

    /*
     *   EFFECTS
     */

    return (
        <DataContext.Provider value={{ options, setOptions }}>
            {children}
        </DataContext.Provider>
    )
}

export default AppContext
