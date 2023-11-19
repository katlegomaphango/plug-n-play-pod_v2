import { AppBar, Avatar, Toolbar, Typography, styled } from '@mui/material'
import logo from '../assets/meta/logo.png'
import { theme } from '../theme'

const AppToolbar = styled(Toolbar)({
    background: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'space-between'
})

const LogoText = styled(Typography)({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.light,
    marginLeft: '0.5rem'
})

const Navbar = () => {
    return (
        <>
            <AppBar position='sticky'>
                <AppToolbar>
                    <Toolbar>
                        <Avatar alt='nav logo' src={logo} />
                        <LogoText variant='h1' sx={{display: {xs: 'none', sm: 'block'}}}>
                            Plug 'n Play
                        </LogoText>
                    </Toolbar>
                </AppToolbar>
            </AppBar>
        </>
    )
}

export default Navbar