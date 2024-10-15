import React, { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDate, setTime } from "../../redux/Date/dateSlice";

const TheaterShowtimes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const theaters = [
    {
      name: "Cinepolis: Orion East Mall, Banaswadi",
      showtimes: [{ time: "18:00" }, { time: "22:00" }],
      features: ["M-Ticket", "Food & Beverage"],
      status: "Non-cancellable",
    },
    {
      name: "Mukunda 4K Dolby Atmos: M.S.Nagar",
      showtimes: [
        { time: "14:00", label: "" },
        { time: "20:00", label: "" },
      ],
      features: ["M-Ticket"],
      status: "Cancellation Available",
    },
  ];

  if (!currentUser) {
    return null;
  }

  const Seathandle = (showtime) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    navigate(`/Site-Selection/${id}`);
    dispatch(setDate(formattedDate));
    dispatch(setTime(showtime.time));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 p-4 ">
      <div>
        <div className="flex gap-3 m-3 " onClick={() => navigate("/all-movie")}>
          <Button className="text-black border border-red-400">Action</Button>
          <Button className="text-black border border-red-400">Drama</Button>
          <Button className="text-black border border-red-400">Thriller</Button>
        </div>
        <div className="border border-gray-200"></div>
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="w-full p-2 border rounded-md border-gray-300 "
        dateFormat="MMMM d, yyyy"
      />

      {/* Display theaters */}
      {theaters.map((theater, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{theater.name}</h3>
            </div>
          </div>
          <div className="flex space-x-2 mb-4">
            {theater.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center text-xs text-green-600">
                {feature === "M-Ticket" ? "🎟️" : "🍿"}
                <span className="ml-1">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex space-x-4 mb-2">
            {theater.showtimes.map((showtime, idx) => (
              <div
                key={idx}
                className="text-center"
                onClick={() => Seathandle(showtime)}>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
                  {showtime.time}
                </button>
                {showtime.label && (
                  <div className="text-xs text-gray-500 mt-1">
                    {showtime.label}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-xs">
            <span
              className={`${
                theater.status === "Non-cancellable"
                  ? "text-orange-500"
                  : "text-green-500"
              }`}>
              ● {theater.status}
            </span>
          </div>
        </Card>
      ))}

      <div className="flex justify-end space-x-4 text-xs">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>{" "}
          AVAILABLE
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span> FAST
          FILLING
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>{" "}
          SUBTITLES LANGUAGE
        </span>
      </div>
    </div>
  );
};

export default TheaterShowtimes;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; // Import styles
// import { Card, Button } from "flowbite-react";
// import { useNavigate, useParams } from "react-router-dom";

// const BuyTicketsPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const navigate = useNavigate();
//   const { id } = useParams();

//   // Sample static movie data

//   // Sample static theatres/screen data
//   const theatres = [
//     {
//       _id: "screen1",
//       name: "PVR Cinemas",
//       location: "Forum Mall, Koramangala",
//     },
//     {
//       _id: "screen2",
//       name: "INOX",
//       location: "Garuda Mall, MG Road",
//     },
//     {
//       _id: "screen3",
//       name: "Cinepolis",
//       location: "Orion Mall, Rajajinagar",
//     },
//   ];

//   return (
//     <>
//       <div className="bg-gray-100 min-h-screen p-8">
//         {/* Movie Details Section */}
//         <div className="bg-white p-3 rounded-md shadow-md mb-6">
//           <div
//             className="flex gap-2 m-2  "
//             onClick={() => navigate("/all-movie")}>
//             <Button className="text-black border border-red-400">Action</Button>

//             <Button className="text-black border border-red-400">Drama</Button>

//             <Button className="text-black border border-red-400">
//               Thriller
//             </Button>
//           </div>

//           {/* Date Picker */}
//           <DatePicker
//             selected={selectedDate}
//             onChange={(date) => setSelectedDate(date)}
//             className="w-full p-2 border rounded-md border-gray-300 "
//             dateFormat="MMMM d, yyyy"
//           />
//         </div>

//         {/* Theatre Screens Section */}
//         {theatres && theatres.length > 0 && (
//           <div className="bg-white p-6 rounded-md shadow-md">
//             {theatres.map((screen, index) => {
//               return (
//                 <div
//                   className="flex justify-between items-center border-b border-gray-200 py-4"
//                   key={index}>
//                   <div>
//                     <h2 className="text-xl font-semibold">{screen.name}</h2>
//                     <h3 className="text-md font-medium text-gray-700">
//                       {screen.location}
//                     </h3>
//                   </div>
//                   {/* Select Button */}
//                   <button
//                     className="bg-red-500 text-white font-bold py-2 px-4 rounded-full"
//                     onClick={() => navigate(`/Site-Selection/${id}`)}>
//                     Select
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BuyTicketsPage;
