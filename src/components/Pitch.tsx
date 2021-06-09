import { StyledPitch } from "../styles";
import { Formation } from "../types";

export function Pitch({
  selectedFormation,
  children,
}: {
  selectedFormation: Formation | null;
  children: any;
}) {
  return <StyledPitch>{children}</StyledPitch>;
}
