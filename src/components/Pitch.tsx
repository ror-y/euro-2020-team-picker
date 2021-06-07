import { StyledPitch } from "../styles";
import { Formation } from "../types";

export function Pitch({
  selectedFormation,
  children,
}: {
  selectedFormation: Formation;
  children: any;
}) {
  return <StyledPitch>{children}</StyledPitch>;
}
