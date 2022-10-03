import "./EventPage.css";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";


const PropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

const EventPage = () => {

  useEffect(() => {
    setLoading(true);
    const getProperties = onSnapshot(
      collection(db, "properties"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProperties(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      getProperties();
    };
  }, []);
  return (
    <div className="Event-Section">
      <div className="left">
        <div className="event-text">
          {properties.map((event,index)=>(
            <>
            <div className="event-heading">Birthday Bash</div>
          <div className="event-host-name">hosted by Elysia</div>
          <div className="event-date">
            <div className="event-date-icon">
              <HiOutlineCalendar size={32} color="#8456EC" />
            </div>
            <div className="event-date-time">
              <div className="date-from">18 August 6:00PM</div>
              <div className="date-to">to 19 Aug 1:00PM UTC+10</div>
            </div>
          </div>
          <div className="event-location">
            <div className="event-location-icon">
              <HiOutlineLocationMarker size={32} color="#8456EC" />
            </div>
            <div className="event-location-address">
              <div className="street-address">London Street</div>
              <div className="address-code">249980 Paris</div>
            </div>
          </div>
        

            </>

          ))}
          
        <div className="right" />
      </div>
      </div>
    </div>
  );
};

export default EventPage;
