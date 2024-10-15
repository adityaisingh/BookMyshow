import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../redux/user/userSlice";
import { Avatar, Button, Card, Label, TextInput } from "flowbite-react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/auth/logout");
      dispatch(logoutSuccess());
      toast.success("Logout Successfully");
      navigate("/signup");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/findhistory/${currentUser._id}`
        );
        setData(response.data?.bookingDetails);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, []);


  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-semibold text-center mb-8">
        User Dashboard
      </h1>

      {/* Profile Section */}
      <Card className="mb-8">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Profile
        </h5>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar
            img={currentUser.profilePicture}
            rounded
            size="xl"
            statusPosition="bottom-right"
            status="online"
          />
          <div className="flex-grow w-full space-y-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                placeholder={currentUser.username}
                readOnly
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput id="email" placeholder={currentUser.email} readOnly />
            </div>
            <Button
              color="failure"
              onClick={handleSignOut}
              className="w-full sm:w-auto bg-red-600">
              Sign out
            </Button>
          </div>
        </div>
      </Card>

      {/* Bookings Section */}
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Booking History
        </h5>
        {data && data.length > 0 ? (
          <div className="space-y-4">
            {data.map((item, index) => (
              <Card key={index}>
                <div className="flex items-center space-x-4">
                  <img
                    src={item?.movieId?.image || "/api/placeholder/80/120"}
                    alt={item?.movieId?.title}
                    className="h-24 w-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold truncate">
                      {item?.movieId?.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Date: {item?.showdata}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Seats: {item?.seatNumbers?.join(", ")}
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                    Booked
                  </span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            You don't seem to have any bookings done in the past
          </p>
        )}
      </Card>
    </div>
  );
};

export default ProfilePage;
