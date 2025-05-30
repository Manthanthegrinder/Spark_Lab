import { Button, Col, Row, Typography } from "antd";
import { useState } from "react";
import EventsForm from "./EventsForm";
import EventsCardComponent from "./EventsCardComponent";

const Events = () => {
  const [isEventFromOpen, setIsEventFromOpen] = useState(false);
  const eventsData = [
  {
    title: "Rocket League",
    duration: "42 min",
    date: "November 14",
    location: "1130 Idylwyld Dr N, Room no @ 241",
    participants: 30,
    type: "Individual",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg",
    joined: 3,
  },
  {
    title: "Valorant Tournament",
    duration: "1 hr 15 min",
    date: "November 20",
    location: "Sask Polytech, Room 105",
    participants: 50,
    type: "Team",
    image: "https://images.unsplash.com/photo-1611605698335-f7e4a09c44fd", // sample image
    joined: 8,
  },
  {
    title: "FIFA eSports",
    duration: "55 min",
    date: "December 2",
    location: "Main Auditorium, Saskatoon",
    participants: 40,
    type: "Individual",
    image: "https://images.unsplash.com/photo-1614101045273-4f52456d6d5f", // sample image
    joined: 12,
  }
];

  return (
    <Row>
      <Col span={24}>
        <Row justify={"space-between"}>
          <Col>
            <Typography>All Events</Typography>
          </Col>
          <Col>
            <Button type="primary" onClick={() => setIsEventFromOpen(true)}>
              Create Event
            </Button>
            <EventsForm isEventFromOpen={isEventFromOpen} setIsEventFromOpen={setIsEventFromOpen}/>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[10 , 10]}>
          <Col span={24}/>
          {eventsData?.map((e) => {
            return (<Col span={8}>
              <EventsCardComponent/>
            </Col>)
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default Events;
