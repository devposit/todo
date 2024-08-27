import { Grid } from "@mui/material";

const FooterComponent = () => {
    return (
        <>
            <Grid
                xs
                sm={12}
                width={"100%"}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '64px'
                }}
                backgroundColor="lightgray">
                 footer
            </Grid>
        </>
    )
}

export default FooterComponent;