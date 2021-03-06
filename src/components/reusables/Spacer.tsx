import React from "react";
import { Box } from "@chakra-ui/react";

interface spacerProps {
  height: number;
}

const Spacer: React.FC<spacerProps> = ({ height }) => {
  return <Box height={height * 20} />;
};

export default Spacer;
