import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Link as RouterLink } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleReservation = async (e) => {
    e.preventDefault();

    // ✅ Basic frontend validation for 10-digit number
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits 📱");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/reservation", // ✅ Backend URL
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message || "Reservation Successful ✅");

      // Clear all form fields
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");

      // Optional: navigate to success page
      // navigate("/success");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      toast.error(
        error.response?.data?.message || "Failed to save reservation ❌"
      );
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            {/* If user not logged in, prompt to login/signup */}
            {!currentUser ? (
              <div style={{ padding: 12 }}>
                <p>Please <RouterLink to="/login">login</RouterLink> or <RouterLink to="/signup">sign up</RouterLink> to make a reservation.</p>
              </div>
            ) : (
              <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone (10 digits)"
                  value={phone}
                  onChange={(e) => {
                    // Only allow up to 10 digits
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setPhone(value);
                  }}
                  maxLength="10"
                  pattern="\d{10}"
                  required
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
