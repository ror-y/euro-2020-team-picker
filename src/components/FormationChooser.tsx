import { formations } from "../data/formations";
import { Formation, Modes, Stages } from "../types";
import { MenuList, MenuListItem, MenuListText } from "../styles";
import _ from "lodash";

export const FormationChooser = ({
  selectedFormation,
  setSelectedFormation,
  setMode,
  setEditingId,
  setStage,
}: {
  selectedFormation: Formation | null;
  setMode: (value: Modes) => any;
  setSelectedFormation: (value: Formation) => any;
  setEditingId: (val: null) => any;
  setStage: (val: Stages) => any;
}) => {
  const handleChange = (frmName: string) => {
    setMode(Modes.Default);
    setSelectedFormation(
      // @ts-ignore
      formations.find(({ name }) => name === frmName)
    );
    setStage(Stages.PickTeamOnPitch);
    setEditingId(null);
  };

  return (
    <MenuList>
      {_.sortBy(formations, "name").map(({ name }) => (
        <MenuListItem key={name} onClick={() => handleChange(name)}>
          <MenuListText style={{ fontSize: "18px" }}>{name}</MenuListText>
        </MenuListItem>
      ))}
    </MenuList>
  );
};
