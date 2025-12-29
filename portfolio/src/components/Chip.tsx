import { Chip, ChipProps } from "@mui/material";

export const CustomChip = ({ label, ...props }: ChipProps) => {
  return (
    <Chip
      sx={{ height: { xs: 18, sm: 20 }, fontSize: { xs: 14, sm: 16 } }}
      color="warning"
      variant="outlined"
      size="medium"
      label={label}
      {...props}
    ></Chip>
  );
};
