import { Chip, ChipProps } from "@mui/material"; 
 

export const CustomChip = ({ label, ...props }: ChipProps) => {
  return (
    <Chip
      sx={{ height: 20, fontSize: 16 }}
      color="warning"
      variant="outlined"
      size="medium"
      label={label}
      {...props}
    ></Chip>
  );
};
