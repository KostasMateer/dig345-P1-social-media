import { Typography, Stack } from "@mui/material"
import "./navbar.style.css"

function Navbar({image, title}) {
    return (
        <Stack className="navbar-color" direction="row" spacing={2}>
            <img className="center-image" style={{ maxHeight: '60px', maxWidth: '60px' }} src={image} alt="logo of website" />
            <Typography sx={{display: {"xs":"none", "sm":"flex"}}} className="center-text" variant="h5">{title}</Typography>
            <Typography sx={{display: {"xs":"flex", "sm":"none"}}} className="center-text" variant="h6">{title}</Typography>
        </Stack>
    );
}

export default Navbar;