import { useState, useMemo } from "react";

import PageTransition from "../components/PageTransition";
import CarparkHeader from "../components/CarparkHeader";
import CarparkCard from "../components/CarparkCard";
import SortDropdown from "../components/SortDropdown";

const carparks = [
  {
    id: 1,
    name: "Bellecour Parking",
    spaces: 125,
    distance: "350 m",
    favorite: true,
  },
  {
    id: 2,
    name: "Part Dieu Parking",
    spaces: 62,
    distance: "1.2 km",
    favorite: false,
  },
  {
    id: 3,
    name: "Confluence Parking",
    spaces: 18,
    distance: "2.6 km",
    favorite: false,
  },
    {
    id: 4,
    name: "Kawasaki Parking",
    spaces: 18,
    distance: "2.3 km",
    favorite: false,
  },
    {
    id: 5,
    name: "Royal Parking",
    spaces: 18,
    distance: "3.6 km",
    favorite: false,
  },
    {
    id: 6,
    name: "Green Parking",
    spaces: 18,
    distance: "1.6 km",
    favorite: false,
  },
];

function parseDistance(distance) {
  const value = parseFloat(distance);

  if (distance.includes("km")) {
    return value * 1000;
  }

  return value;
}

export default function Carparks() {
  const [sortBy, setSortBy] = useState("alphabet");

  const sortedCarparks = useMemo(() => {
    const sorted = [...carparks];

    switch (sortBy) {
      case "alphabet":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "distance":
        sorted.sort(
          (a, b) => parseDistance(a.distance) - parseDistance(b.distance)
        );
        break;

      default:
        break;
    }

    return sorted;
  }, [sortBy]);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto p-8">

        {/* Encabezado */}
        <div className="flex justify-between items-center">

          <CarparkHeader />

          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />

        </div>

        {/* Tarjetas */}
        <div className="mt-8 space-y-5">

          {sortedCarparks.map((carpark) => (
            <CarparkCard
              key={carpark.id}
              name={carpark.name}
              spaces={carpark.spaces}
              distance={carpark.distance}
              favorite={carpark.favorite}
            />
          ))}

        </div>

      </div>
    </PageTransition>
  );
}