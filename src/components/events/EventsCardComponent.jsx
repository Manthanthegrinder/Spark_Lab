import React from "react";
import { Card, Typography, Row, Space } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const EventsCardComponent = () => {
  return (
    <Card
      style={{
        width: "100%",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        padding: 0,
      }}
      styles={{
            body: {
              padding: 16,
            },
          }}
    >
      {/* Top Row: Title and Time */}
      <Row justify="space-between" align="middle">
        <Title level={4} style={{ margin: 0 }}>
          Rocket League
        </Title>
        <Space size={4} align="center" style={{ lineHeight: 1, paddingBottom: 2 }}>
  <ClockCircleOutlined style={{ fontSize: 16, verticalAlign: "middle" }} />
  <Text style={{ lineHeight: 1.2 }}>42 min</Text>
</Space>

      </Row>

      {/* Image (Below title, with rounded corners) */}
      <div style={{ margin: "12px 0" }}>
        <img
          src="https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg"
          alt="Rocket League"
          style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 12 }}
        />
      </div>

      {/* Date */}
      <Text type="secondary">November 14</Text>

      {/* Info Rows */}
      <Space direction="vertical" size="middle" style={{ marginTop: 12 }}>
        <Space>
          <EnvironmentOutlined />
          <Text>1130 Idylwyld Dr N, Room no @ 241</Text>
        </Space>
        <Space>
          <TeamOutlined />
          <Text>30</Text>
        </Space>
        <Space>
          <UserOutlined />
          <Text>Individual</Text>
        </Space>
      </Space>

      {/* Bottom Row */}
      <Row justify="space-between" style={{ marginTop: 16 }}>
        <Text strong style={{ cursor: "pointer" }}>
          VIEW ALL
        </Text>
        <Text type="secondary">3/30</Text>
      </Row>
    </Card>
  );
};

export default EventsCardComponent;
