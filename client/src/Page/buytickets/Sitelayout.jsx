import React, { useState } from "react";
import { Button, Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import react-hot-toast
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
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [sendingSeats, setSelectedsendSeats] = useState([]);
  const { selectedDates, selectedTimes } = useSelector(
    (state) => state.datetime
  );
  const { currentUser } = useSelector((state) => state.user);


  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
    const seatarr = `${seat}`;
    setSelectedsendSeats((prev) =>
      prev.includes(seatarr)
        ? prev.filter((id) => id !== seatarr)
        : [...prev, seatarr]
    );
  };

  const navigate = useNavigate();

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
        console.log(response.data);
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
      console.log(err.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
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

      <Button className="bg-red-600 mt-4" onClick={handleConfirm}>
        Confirm Seat
      </Button>

      {/* React Hot Toast container (no need for extra setup, toasts are automatic) */}
    </div>
  );
};

export default SeatingChart;

// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// // import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// const SelectSeatPage = () => {
//   // Dummy data to replace backend content
//   const movie = {
//     title: "Inception",
//     genre: ["Action", "Sci-Fi", "Thriller"],
//   };

//   const screen = {
//     screen: {
//       name: "IMAX - Screen 1",
//       seats: [
//         {
//           type: "VIP",
//           price: 500,
//           rows: [
//             {
//               rowname: "A",
//               cols: [
//                 {
//                   seats: [
//                     { seat_id: 1 },
//                     { seat_id: 2 },
//                     { seat_id: 3 },
//                     { seat_id: 4 },
//                   ],
//                 },
//               ],
//             },
//             {
//               rowname: "B",
//               cols: [{ seats: [{ seat_id: 3 }, { seat_id: 4 }] }],
//             },
//           ],
//         },
//         {
//           type: "Regular",
//           price: 300,
//           rows: [
//             {
//               rowname: "C",
//               cols: [{ seats: [{ seat_id: 5 }, { seat_id: 6 }] }],
//             },
//             {
//               rowname: "D",
//               cols: [{ seats: [{ seat_id: 7 }, { seat_id: 8 }] }],
//             },
//           ],
//         },
//       ],
//     },
//     movieSchedulesforDate: [
//       {
//         _id: "1",
//         showTime: "10:00 AM",
//         notAvailableSeats: [{ row: "A", seat_id: 1 }],
//       },
//       { _id: "2", showTime: "2:00 PM", notAvailableSeats: [] },
//     ],
//   };

//   const [selectedTime, setSelectedTime] = useState(
//     screen.movieSchedulesforDate[0]
//   );
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const selectDeselectSeat = (seat) => {
//     const isSelected = selectedSeats.some(
//       (s) =>
//         s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id
//     );

//     if (isSelected) {
//       setSelectedSeats(
//         selectedSeats.filter(
//           (s) =>
//             !(
//               s.row === seat.row &&
//               s.col === seat.col &&
//               s.seat_id === seat.seat_id
//             )
//         )
//       );
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   const generateSeatLayout = () => {
//     const timeIndex = screen.movieSchedulesforDate.findIndex(
//       (t) => t.showTime === selectedTime.showTime
//     );
//     const notAvailableSeats =
//       screen.movieSchedulesforDate[timeIndex].notAvailableSeats;

//     return (
//       <div className="space-y-8">
//         {screen.screen.seats.map((seatType, index) => (
//           <div key={index}>
//             <h2 className="text-xl font-bold mb-4">
//               {seatType.type} - ₹{seatType.price}
//             </h2>
//             <div className="space-y-4">
//               {seatType.rows.map((row, rowIndex) => (
//                 <div key={rowIndex} className="flex items-center">
//                   <p className="w-8 font-semibold">{row.rowname}</p>
//                   <div className="flex space-x-2">
//                     {row.cols.map((col, colIndex) => (
//                       <div key={colIndex} className="flex space-x-1">
//                         {col.seats.map((seat, seatIndex) => {
//                           const isUnavailable = notAvailableSeats.some(
//                             (s) =>
//                               s.row === row.rowname &&
//                               s.seat_id === seat.seat_id &&
//                               s.col === colIndex
//                           );

//                           const isSelected = selectedSeats.some(
//                             (s) =>
//                               s.row === row.rowname &&
//                               s.seat_id === seat.seat_id &&
//                               s.col === colIndex
//                           );

//                           return (
//                             <span
//                               key={seatIndex}
//                               className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer
//                                 ${
//                                   isUnavailable
//                                     ? "bg-gray-300 cursor-not-allowed"
//                                     : isSelected
//                                     ? "bg-green-500"
//                                     : "bg-blue-500 hover:bg-blue-600"
//                                 }
//                               `}
//                               onClick={() =>
//                                 !isUnavailable &&
//                                 selectDeselectSeat({
//                                   row: row.rowname,
//                                   col: colIndex,
//                                   seat_id: seat.seat_id,
//                                   price: seatType.price,
//                                 })
//                               }>
//                               {seatIndex + 1}
//                             </span>
//                           );
//                         })}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const handleBooking = () => {
//     const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);
//     if (selectedSeats.length === 0) {
//       toast.error("Please select at least one seat!");
//       return;
//     }
//     toast.success(`Booking successful! Total: ₹${totalPrice}`);
//   };

//   return (
//     <div className="p-8 space-y-8">
//       <div className="text-center space-y-4">
//         <h1 className="text-3xl font-bold">
//           {movie.title} - {screen.screen.name}
//         </h1>
//         <h3 className="text-xl">{movie.genre.join(" / ")}</h3>
//       </div>

//       <div className="flex justify-center space-x-4">
//         {screen.movieSchedulesforDate.map((time) => (
//           <h3
//             key={time._id}
//             className={`px-4 py-2 rounded cursor-pointer ${
//               selectedTime._id === time._id
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200"
//             }`}
//             onClick={() => {
//               setSelectedTime(time);
//               setSelectedSeats([]);
//             }}>
//             {time.showTime}
//           </h3>
//         ))}
//       </div>

//       <div className="flex justify-center space-x-8">
//         <div className="flex items-center space-x-2">
//           <span className="w-8 h-8 bg-gray-300 rounded"></span>
//           <p>Not available</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <span className="w-8 h-8 bg-blue-500 rounded"></span>
//           <p>Available</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <span className="w-8 h-8 bg-green-500 rounded"></span>
//           <p>Selected</p>
//         </div>
//       </div>

//       {generateSeatLayout()}

//       <div className="flex justify-between items-center mt-8">
//         <h2 className="text-2xl font-semibold">
//           Total: ₹{selectedSeats.reduce((acc, seat) => acc + seat.price, 0)}
//         </h2>
//         <button
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           onClick={handleBooking}>
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectSeatPage;

// import React, { useEffect, useState } from "react";

// import { toast } from "react-hot-toast";

// const SelectSeatPage = () => {
//   const [screen, setScreen] = useState(null);
//   const [movie, setMovie] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [selectedTime, setSelectedTime] = useState(null);

//   useEffect(() => {
//     // Simulated data fetching: You can remove these functions if backend calls are no longer needed.
//     const mockScreenData = {
//       screen: {
//         name: "Screen 1",
//         seats: [{ type: "Gold", price: 300, rows: [] }],
//       },
//       movieSchedulesforDate: [
//         { _id: "1", showTime: "7:00 PM", notAvailableSeats: [] },
//       ],
//     };
//     const mockMovieData = { title: "Inception", genre: ["Action", "Sci-Fi"] };

//     setScreen(mockScreenData);
//     setMovie(mockMovieData);
//     setSelectedTime(mockScreenData.movieSchedulesforDate[0]);
//   }, []);

//   const selectDeselectSeat = (seat) => {
//     const isSelected = selectedSeats.some(
//       (s) =>
//         s.row === seat.row && s.col === seat.col && s.seat_id === seat.seat_id
//     );
//     setSelectedSeats(
//       isSelected
//         ? selectedSeats.filter((s) => s.seat_id !== seat.seat_id)
//         : [...selectedSeats, seat]
//     );
//   };

//   const generateSeatLayout = () => {
//     if (!screen) return null;

//     return screen.screen.seats.map((seatType, index) => (
//       <div key={index} className="p-5 bg-white m-3 rounded-lg shadow-md">
//         <h2 className="text-sm font-medium border border-gray-300 rounded-full px-4 py-1 inline-block">
//           {seatType.type} - Rs. {seatType.price}
//         </h2>
//         <div className="flex flex-col space-y-6 mt-4">
//           {seatType.rows.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex items-center space-x-10">
//               <p className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center">
//                 {row.rowname}
//               </p>
//               <div className="flex space-x-12">
//                 {row.cols.map((col, colIndex) => (
//                   <div key={colIndex} className="flex space-x-2">
//                     {col.seats.map((seat, seatIndex) => (
//                       <span
//                         key={seatIndex}
//                         className={`h-8 w-8 flex items-center justify-center rounded-md shadow-md cursor-pointer ${
//                           selectedSeats.some(
//                             (s) =>
//                               s.row === row.rowname &&
//                               s.seat_id === seat.seat_id &&
//                               s.col === colIndex
//                           )
//                             ? "bg-blue-600 text-white"
//                             : "bg-white text-black hover:bg-blue-500 hover:text-white"
//                         }`}
//                         onClick={() =>
//                           selectDeselectSeat({
//                             row: row.rowname,
//                             col: colIndex,
//                             seat_id: seat.seat_id,
//                             price: seatType.price,
//                           })
//                         }>
//                         {seatIndex + 1}
//                       </span>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));
//   };

//   const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);

//   return (
//     <div className="bg-gray-200 min-h-screen w-full">
//       {movie && screen && (
//         <div className="bg-white py-4">
//           <div className="bg-blue-600 text-white p-5">
//             <h1 className="text-2xl font-semibold">
//               {movie.title} - {screen.screen.name}
//             </h1>
//             <h3 className="text-sm font-semibold border border-gray-400 px-4 py-1 rounded-full mt-2 inline-block">
//               {movie.genre.join(" / ")}
//             </h3>
//           </div>
//         </div>
//       )}

//       {screen && (
//         <div className="flex flex-col items-center bg-white">
//           {/* Time Selector */}
//           <div className="flex space-x-3 mt-5">
//             {screen.movieSchedulesforDate.map((time, index) => (
//               <h3
//                 key={index}
//                 className={`border-2 px-5 py-2 rounded-full text-sm font-medium cursor-pointer ${
//                   selectedTime?._id === time._id
//                     ? "border-blue-600 text-blue-600"
//                     : "border-gray-300"
//                 }`}
//                 onClick={() => {
//                   setSelectedTime(time);
//                   setSelectedSeats([]);
//                 }}>
//                 {time.showTime}
//               </h3>
//             ))}
//           </div>

//           {/* Seat Indicators */}
//           <div className="flex space-x-10 mt-5">
//             <div className="flex items-center space-x-2">
//               <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
//               <p className="text-sm font-medium text-gray-600">Not Available</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="w-5 h-5 bg-white border rounded-full"></span>
//               <p className="text-sm font-medium text-gray-600">Available</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="w-5 h-5 bg-blue-600 rounded-full"></span>
//               <p className="text-sm font-medium text-gray-600">Selected</p>
//             </div>
//           </div>

//           {/* Seat Layout */}
//           {generateSeatLayout()}

//           {/* Total Price */}
//           <div className="flex justify-between items-center p-5 bg-white mt-5 rounded-lg shadow-md w-80">
//             <div className="flex space-x-3 items-center">
//               <h2 className="text-gray-600 text-sm font-semibold">Total</h2>
//               <h3 className="text-blue-600 text-sm font-semibold">
//                 Rs. {totalPrice}
//               </h3>
//             </div>
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
//               onClick={() => toast.success("Booking Successful")}>
//               Book Now
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectSeatPage;
