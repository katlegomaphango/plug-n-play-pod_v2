import { AppBar, Avatar, Button, Toolbar, Typography, styled } from '@mui/material'
import logo from '../assets/meta/logo.png'
import { theme } from '../theme'
import { Login } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

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

const LogButton = styled(Button)({
    borderRadius: '0.3rem',
    border: '1px solid',
    color: theme.palette.primary.contrastText
})

const Navbar = () => {
    const navigate = useNavigate()
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
                    <LogButton variant='outlined' onClick={() => {navigate('/')}}>
                        <Login />
                        <Typography ml={1} sx={{display: {xs: 'none', sm: 'block'}}}>Login</Typography>
                    </LogButton>
                </AppToolbar>
            </AppBar>
        </>
    )
}

export default Navbar