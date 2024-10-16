import React, { useState, useEffect } from "react";
import { Button, Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import axios from "axios";

const SeatTypes = {
  PREMIUM: "Rs. 220 PREMIUM",
  EXECUTIVE: "Rs. 180 EXECUTIVE",
  NORMAL: "Rs. 140 NORMAL",
};

const initialSeats = [
  {
    row: "H",
    seats: Array.from({ length: 15 }, (_, i) => i + 1),
    type: SeatTypes.PREMIUM,
  },
  {
    row: "G",
    seats: Array.from({ length: 15 }, (_, i) => i + 16),
    type: SeatTypes.PREMIUM,
  },
  {
    row: "F",
    seats: Array.from({ length: 15 }, (_, i) => i + 30),
    type: SeatTypes.PREMIUM,
  },
  {
    row: "E",
    seats: Array.from({ length: 15 }, (_, i) => i + 45),
    type: SeatTypes.EXECUTIVE,
  },
  {
    row: "D",
    seats: Array.from({ length: 15 }, (_, i) => i + 60),
    type: SeatTypes.EXECUTIVE,
  },
  {
    row: "C",
    seats: Array.from({ length: 10 }, (_, i) => i + 75),
    type: SeatTypes.NORMAL,
  },
  {
    row: "B",
    seats: Array.from({ length: 10 }, (_, i) => i + 85),
    type: SeatTypes.NORMAL,
  },
  {
    row: "A",
    seats: Array.from({ length: 6 }, (_, i) => i + 95),
    type: SeatTypes.NORMAL,
  },
];

const SeatBox = ({ number, isSelected, isBooked, onClick }) => (
  <div
    className={`w-8 h-8 m-1 flex items-center justify-center cursor-pointer border border-gray-300 ${
      isBooked
        ? "bg-gray-500 text-white cursor-not-allowed" // Gray background for booked seats
        : isSelected
        ? "bg-green-500 text-white" // Green background for selected seats
        : "bg-white"
    }`}
    onClick={!isBooked ? onClick : null} // Disable click on booked seats
  >
    {number}
  </div>
);

const SeatingChart = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [sendingSeats, setSelectedsendSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]); // State to store booked seats
  const { selectedDates, selectedTimes } = useSelector(
    (state) => state.datetime
  );
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch booked seats from the backend when the component is mounted
    const fetchBookedSeats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/get-booked-seats/${id}`,
          {
            params: {
              movieDate: selectedDates,
              movieTimeSlot: selectedTimes,
            },
          }
        );
        setBookedSeats(response.data.bookedSeats);
      } catch (err) {
        console.error("Error fetching booked seats:", err);
      }
    };

    fetchBookedSeats();
  }, [id, selectedDates, selectedTimes]);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
    const seatArr = `${seat}`;
    setSelectedsendSeats((prev) =>
      prev.includes(seatArr)
        ? prev.filter((id) => id !== seatArr)
        : [...prev, seatArr]
    );
  };

  const handleConfirm = async () => {
    try {
      if (sendingSeats.length > 0) {
        const response = await axios.post(
          `http://localhost:5000/api/v1/book-seats/${id}`,
          {
            movieId: id,
            movieDate: selectedDates,
            movieTimeSlot: selectedTimes,
            seats: sendingSeats,
            userId: currentUser._id,
          }
        );
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/Profile-Page");
        }, 1000);
      } else {
        toast.error("Please select at least one seat before confirming!", {
          duration: 2000,
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Card className="max-w-6xl text-center">
        <h2 className="text-2xl font-bold mb-4 items-center">Seating Chart</h2>
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
                    isBooked={bookedSeats.includes(seat)} // Check if the seat is booked
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

      <Button className="bg-red-600 mt-4" onClick={handleConfirm}>
        Confirm Seat
      </Button>
    </div>
  );
};

export default SeatingChart;
