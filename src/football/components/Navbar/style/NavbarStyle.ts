import React from 'react'
import styled from 'styled-components'

export const StyledNav = styled.nav`
background-color: lightgray;
padding: 0 16px;
`

export const Nav = {
    Main: styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    `, 
    logo: styled.div`
    font-size: 10px;
    `,

    Index: styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    `,

    Search: styled.div`

    `
}

