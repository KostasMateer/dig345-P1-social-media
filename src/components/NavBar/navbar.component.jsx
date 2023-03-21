import { Typography, Grid, useMediaQuery } from "@mui/material"
import "./navbar.style.css"

function Navbar({image, title}) {
    const isSmallScreen = useMediaQuery('(max-width: 899px)')

    return (
        <Grid className="navbar-color" sx={{position: 'sticky', top:-20}} container spacing={2}>
            <Grid item xs={4} sm={3} md={2}>
                <img className="center-image" style={{ maxHeight: '60px', maxWidth: '60px' }} src={image} alt="" />
            </Grid>
            <Grid item sm={9} md={10} sx={{display: {'xs': 'none', 'sm': 'flex', 'md' : 'flex', 'lg' : 'none'}}}
             style={{paddingLeft: window.innerWidth >= 603 && window.innerWidth <= 900 ?'0rem':'1rem'}}>
                <Typography sx={{textAlign:'left'}} className="center-text" variant="h4">{title}</Typography>
            </Grid>
            <Grid item sm={9} md={9} sx={{display: {'xs': 'none', 'sm': 'none', 'md': 'none', 'lg':'flex'}, paddingLeft: '1'}}>
                <Typography sx={{textAlign:'left'}} className="center-text" variant="h4">{title}</Typography>
            </Grid>
            <Grid item xs={8} sx={{display: {'xs': 'flex', 'sm': 'none'}}} style={{paddingLeft: '1.3rem'}}>
                <Typography sx={{textAlign:'left'}} className="center-text" variant="h6">{title}</Typography>
            </Grid>
        </Grid>
    );
}

export default Navbar;