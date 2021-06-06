import { formations } from "../data/formations";
import { Formation, Modes } from "../types";

export const FormationChooser = ({
  selectedFormation,
  setSelectedFormation,
  setMode,
}: {
  selectedFormation: Formation;
  setMode: (value: Modes) => any;
  setSelectedFormation: (value: Formation) => any;
}) => {
  const handleChange = (evt: any) => {
    setMode(Modes.Default);
    setSelectedFormation(
      // @ts-ignore
      formations.find(({ name }) => name === evt.target.value)
    );
  };

  return (
    <select onChange={handleChange} value={selectedFormation.name}>
      {formations.map(({ name }) => (
        <option key={name}>{name}</option>
      ))}
    </select>
  );
};