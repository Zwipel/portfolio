import { Chip, ChipProps } from "@mui/material";

export const MultiChip = ({
  label,
  icon,
  clickable,
  onClick,
  ...props
}: ChipProps) => {
  return (
    <Chip
      sx={{
        height: "auto",
        "& .MuiChip-label": {
          display: "block",
          whiteSpace: "normal",
        },
        fontSize: 20,
        borderWidth: 3,
      }}
      variant="outlined"
      color="warning"
      label={label}
      icon={icon}
      clickable={clickable}
      onClick={onClick}
      {...props}
    />
  );
};
