// app/experiences/page.tsx
"use client";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useLanguage } from "../model/contexts/LanguageContext";

type Experience = {
  title: string;
  company: string;
  date: string;
  bullets: string;
};

export default function ExperiencesPage() {
  const { t } = useLanguage();
  const experiences: Experience[] = [
    {
      title: t.title1,
      company: t.company1,
      date: t.date1,
      bullets: t.bullets1,
    },
    {
      title: t.title2,
      company: t.company2,
      date: t.date2,
      bullets: t.bullets2,
    },
  ];
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {t.experiences}
      </Typography>

      <List>
        {experiences.map((exp, idx) => (
          <Box key={idx}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={`${exp.title} — ${exp.company}`}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {exp.date}
                    </Typography>

                    <Typography variant="body2">{exp.bullets}</Typography>
                  </>
                }
              />
            </ListItem>
            {idx < experiences.length - 1 && <Divider component="li" />}
          </Box>
        ))}
      </List>
    </Box>
  );
}
