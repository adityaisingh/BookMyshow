import React, { useState } from "react";
import { Button, Card } from "flowbite-react";

const SeatTypes = {
  PREMIUM: "Rs. 180 PREMIUM",
  EXECUTIVE: "Rs. 160 EXECUTIVE",
  NORMAL: "Rs. 140 NORMAL",
};

const initialSeats = [
  { row: "H", seats: [1, 2, 4, 5, 8], type: SeatTypes.PREMIUM },
  { row: "G", seats: [1, 2, 3, 5, 6, 7, 8, 9, 10], type: SeatTypes.PREMIUM },
  { row: "F", seats: [1, 2, 3], type: SeatTypes.PREMIUM },

  {
    row: "E",
    seats: Array.from({ length: 15 }, (_, i) => i + 1),
    type: SeatTypes.EXECUTIVE,
  },
  {
    row: "D",
    seats: Array.from({ length: 15 }, (_, i) => i + 1),
    type: SeatTypes.EXECUTIVE,
  },
  {
    row: "C",
    seats: Array.from({ length: 15 }, (_, i) => i + 1),
    type: SeatTypes.EXECUTIVE,
  },
  {
    row: "B",
    seats: Array.from({ length: 15 }, (_, i) => i + 1),
    type: SeatTypes.NORMAL,
  },
  {
    row: "A",
    seats: Array.from({ length: 15 }, (_, i) => i + 1),
    type: SeatTypes.NORMAL,
  },
];

const SeatBox = ({ number, isSelected, onClick }) => (
  <div
    className={`w-8 h-8 m-1 flex items-center justify-center cursor-pointer border border-gray-300 ${
      isSelected ? "bg-green-500 text-white" : "bg-white"
    }`}
    onClick={onClick}>
    {number}
  </div>
);

const SeatingChart = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-6xl text-center">
        <h2 className="text-2xl font-bold mb-4 items-center ">Seating Chart</h2>
        <div className="flex flex-col items-center">
          {initialSeats.map(({ row, seats, type }) => (
            <div key={row} className="flex items-center mb-2">
              <span className="w-8 font-bold">{row}</span>
              <div className="flex flex-wrap">
                {seats.map((seat) => (
                  <SeatBox
                    key={`${row}-${seat}`}
                    number={seat}
                    isSelected={selectedSeats.includes(`${row}-${seat}`)}
                    onClick={() => toggleSeat(row, seat)}
                  />
                ))}
              </div>
              <span className="ml-4 text-sm">{type}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 border border-b-8">
          All eyes this way please!
        </div>
      </Card>
      <Button>Confirm Seat</Button>
    </div>
  );
};

export default SeatingChart;
