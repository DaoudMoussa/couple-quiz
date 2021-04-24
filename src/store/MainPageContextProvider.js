import {useState} from 'react'
import MainPageContext from './main-page-context'

const MainPageContextProvider = (props) => {
    const [state, setState] = useState('choosing');

    const changeStateHandler = (newState) => {
        setState(newState);
    }
    
    return (
        <MainPageContext.Provider value={{
            state: state,
            onChangeState: changeStateHandler
        }}>
            {props.children}
        </MainPageContext.Provider>
    )
}

export default MainPageContextProvider
