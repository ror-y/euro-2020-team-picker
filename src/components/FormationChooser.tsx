import { formations } from "../data/formations";
import { Formation, Modes, Stages } from "../types";
import { MenuList, MenuListItem, MenuListText } from "../styles";

export const FormationChooser = ({
  selectedFormation,
  setSelectedFormation,
  setMode,
  setEditingId,
  setStage,
}: {
  selectedFormation: Formation;
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
      {formations.map(({ name }) => (
        <MenuListItem key={name} onClick={() => handleChange(name)}>
          <MenuListText>{name}</MenuListText>
        </MenuListItem>
      ))}
    </MenuList>
  );
};
