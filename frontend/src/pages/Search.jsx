import { useState } from "react";

export default function Search() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="p-3 ml-2 ">
      azerty
      <input
        className="checkandtitle"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <select className="w-[15%] ml-2 ">
        <option>Ville</option>
        <option>Lyon</option>
        <option>Paris</option>
        <option>Dijon</option>
        <option>Tour</option>
        <option>Vernon</option>
        <option>Orléans</option>
        <option>Aix-En Provence</option>
        <option>Casablanca</option>
        <option>Aveiro</option>
        <option>Le Mans</option>
        <option>Montpelier</option>
        <option>Strasbourg</option>
        <option>Nice</option>
        <option>Geneve</option>
        <option>Brest</option>
        <option>Bordeaux</option>
        <option>Munich</option>
        <option>Rennes</option>
        <option>Clermont-ferrand</option>
        <option>Niort</option>
        <option>Toulouse</option>
        <option>Lille</option>
        <option>Nantes</option>
        <option>Bruxelles</option>
      </select>
    </div>
  );
}
