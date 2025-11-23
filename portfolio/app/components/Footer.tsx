// components/Footer.tsx
"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, py: 3, textAlign: "center", bgcolor: "background.paper" }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Dennis Butenko — Built with Next.js & MUI
      </Typography>
    </Box>
  );
}
