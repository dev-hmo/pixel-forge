import React, { forwardRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as MuiLink } from "@mui/material";

const CustomScrollLink = forwardRef(({ children, ...props }, ref) => {
  return (
    <ScrollLink {...props}>
      <MuiLink ref={ref} underline="none" sx={{ cursor: "pointer" }}>
        {children}
      </MuiLink>
    </ScrollLink>
  );
});

CustomScrollLink.displayName = "CustomScrollLink";

export default CustomScrollLink;
