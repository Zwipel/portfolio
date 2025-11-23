import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt:1,  py: 3, textAlign: "center", bgcolor: "background.paper" }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Dennis Butenko 
      </Typography>
    </Box>
  );
}
