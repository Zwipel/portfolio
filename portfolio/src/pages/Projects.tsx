import { RocketLaunch } from "@mui/icons-material";
import {
  Grid,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
} from "@mui/material";
import React, { useState, useRef, useLayoutEffect } from "react";
import { MultiChip } from "../components/MultilineChip";
import { useLanguage } from "../function/Language";

export const Projects = () => {
  const { t } = useLanguage();

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
    const max = Math.max(...heights);
    setMaxHeight(max);
  }, []);

  return (
    <Grid container spacing={2} sx={{ justifyContent: "center" }}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Box>
          <Stack
            sx={{
              body: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="row"
          >
            <Card
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
              sx={{
                minHeight: maxHeight,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                  paddingBottom: 0,
                }}
              >
                <MultiChip
                  icon={<RocketLaunch />}
                  label={t["Bingo Projekt"]}
                  clickable
                  onClick={() => console.log("Hier könnte Code stehen")}
                />
                <div style={{ display: "block", height: 20 }} />
                <CardMedia
                  component="img"
                  height="194"
                  image="/img.png"
                  alt={t["IT Bedrohung"]}
                  onClick={() => {
                    setSelectedImage("/img.png");
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                  sx={{ marginTop: "auto" }}
                />
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Box>
          <Stack
            sx={{
              body: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="row"
          >
            <Card
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
              sx={{
                minHeight: maxHeight,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                  paddingBottom: 0,
                }}
              >
                <MultiChip
                  icon={<RocketLaunch />}
                  label={t["Digiform"]}
                  clickable
                  onClick={() => console.log("Hier könnte Code stehen")}
                />
                <div style={{ display: "block", height: 20 }} />
                <CardMedia
                  component="img"
                  height="194"
                  image="/img.png"
                  alt={t["IT Bedrohung"]}
                  onClick={() => {
                    setSelectedImage("/img.png");
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                  sx={{ marginTop: "auto" }}
                />
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Box>
          <Stack
            sx={{
              body: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="row"
          >
            <Card
              ref={(el) => {
                cardRefs.current[2] = el;
              }}
              sx={{
                minHeight: maxHeight,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                  paddingBottom: 0,
                }}
              >
                <MultiChip
                  icon={<RocketLaunch />}
                  label={t["Vertriebscheckliste"]}
                  clickable
                  onClick={() => console.log("Hier könnte Code stehen")}
                />
                <div style={{ display: "block", height: 20 }} />
                <CardMedia
                  component="img"
                  height="194"
                  image="/img.png"
                  alt={t["IT Bedrohung"]}
                  onClick={() => {
                    setSelectedImage("/img.png");
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                  sx={{ marginTop: "auto" }}
                />
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Box>
          <Stack
            sx={{
              body: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="row"
          >
            <Card
              ref={(el) => {
                cardRefs.current[3] = el;
              }}
              sx={{
                minHeight: maxHeight,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                  paddingBottom: 0,
                }}
              >
                <MultiChip
                  icon={<RocketLaunch />}
                  label={t["Portfolio Webseite"]}
                  clickable
                  onClick={() => console.log("Hier könnte Code stehen")}
                />
                <div style={{ display: "block", height: 20 }} />
                <CardMedia
                  component="img"
                  height="194"
                  image="/Portfolio.png"
                  alt={t["IT Bedrohung"]}
                  onClick={() => {
                    setSelectedImage("/Portfolio.png");
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                  sx={{ marginTop: "auto" }}
                />
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Box>
          <Stack
            sx={{
              body: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="row"
          >
            <Card
              ref={(el) => {
                cardRefs.current[4] = el;
              }}
              sx={{
                minHeight: maxHeight,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                  paddingBottom: 0,
                }}
              >
                <MultiChip
                  icon={<RocketLaunch />}
                  label={t["Abschlussprojekt Ausbildung"]}
                  clickable
                  onClick={() => console.log("Hier könnte Code stehen")}
                />
                <div style={{ display: "block", height: 20 }} />
                <CardMedia
                  component="img"
                  height="194"
                  image="/Portfolio.png"
                  alt={t["Abschlussprojekt Ausbildung"]}
                  onClick={() => {
                    setSelectedImage("/Portfolio.png");
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                  sx={{ marginTop: "auto" }}
                />
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <CardMedia
            component="img"
            image={selectedImage}
            alt="Enlarged"
            sx={{ maxWidth: "100%", maxHeight: "80vh" }}
          />
        </DialogContent>
      </Dialog>
    </Grid>
  );
};
