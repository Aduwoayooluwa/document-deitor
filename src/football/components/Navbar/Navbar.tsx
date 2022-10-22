import React from 'react'
import { navItems } from './navItems'
import { StyledNav, Nav } from './style/NavbarStyle'


const Navbar: React.FC = () =>{
    return (
        <div className='Navbar-main'>
            <StyledNav>
            <Nav.Main>
                <Nav.logo className="logo">
                    <h2>Sports Spa</h2>
                </Nav.logo>

                <Nav.Search>
                    <input type='search' placeholder='SEARCH TEAMS OR PLAYERS'  />
                </Nav.Search>

                <Nav.Index>
                    {
                        navItems.map((menu) => (
                            <ul key={menu.id}>
                                <li>{menu.title}</li>
                            </ul>
                        ))
                    }
                </Nav.Index>
            </Nav.Main>
            </StyledNav>
        </div>
    )
}

export default Navbar