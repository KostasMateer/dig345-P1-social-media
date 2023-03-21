import { Typography, Grid } from "@mui/material"
import "./navbar.style.css"

function Navbar({image, title}) {
    return (
        <Grid className="navbar-color" sx={{position: 'sticky', top:-20}} container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid sx={{justifyContent: 'left'}} item xs={1}>
                <img className="center-image" style={{ maxHeight: '60px', maxWidth: '60px' }} src={image} alt="" />
            </Grid>
            <Grid item xs={10}>
                <Typography className="center-text" variant="h4" align="left">{title}</Typography>
            </Grid>
        </Grid>
    );
}

export default Navbar;