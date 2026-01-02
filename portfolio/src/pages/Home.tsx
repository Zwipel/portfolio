import { Box, Paper, Stack, Avatar, Typography } from "@mui/material";
import React from "react";
import { CustomChip } from "../components/Chip";
import { useLanguage } from "../function/Language";

export const Home = () => {
  const { t } = useLanguage();

  return (
    <Box>
      <Paper elevation={1} sx={{ p: { xs: 2, sm: 4 } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems={{ xs: "center", sm: "flex-start" }}
          textAlign={{ xs: "center", sm: "left" }}
        >
          <Avatar
            src="/pic.jpg"
            sx={{
              width: { xs: 120, sm: 200 },
              height: { xs: 120, sm: 200 },
              fontSize: { xs: 30, sm: 50 },
            }}
          >
            DB
          </Avatar>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
            >
              Dennis Butenko
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {t.welcome}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              
              sx={{
                mt: 1,
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: 1,
              }}
            >
              <CustomChip label="React" />
              <CustomChip label="JavaScript" />
              <CustomChip label="TypeScript" />
              <CustomChip label="C#" />
              <CustomChip label="SQL" />
              <CustomChip label="Python" />
              <CustomChip label="Microsoft D365" />
            </Stack>
          </Box>
        </Stack>

        <Typography
          sx={{ mt: 3, fontSize: { xs: 16, sm: 18 } }}
          variant="body1"
        >
          {t.summary}
        </Typography>
      </Paper>
    </Box>
  );
};
