import React from 'react'

const MainPageContext = React.createContext({
    state: 'choose',
    onChangeState: () => {}
})

export default MainPageContext
