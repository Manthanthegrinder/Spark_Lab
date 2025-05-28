import { Button, Col, Row, Typography } from "antd";
import { useState } from "react";
import EventsForm from "./EventsForm";

const Events = () => {
  const [isEventFromOpen, setIsEventFromOpen] = useState(false);
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
            <EventsForm isEventFromOpen={isEventFromOpen} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Events;
