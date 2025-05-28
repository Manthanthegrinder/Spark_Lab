import { Modal , Form , Input , Button , InputNumber , DatePicker , TimePicker , Radio , Checkbox , message} from "antd"
import "./EventsForm.css"
import { supabase } from "../../supabaseClient";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
const EventsForm = (props) => {
    const {isEventFromOpen , setIsEventFromOpen} = props;
    const [form] = Form.useForm();
    dayjs.extend(utc);
    const onClose = () => {
        setIsEventFromOpen(false)
    }
   


const onFinish = async (values) => {
 try{
     const date = values.event_date.format("YYYY-MM-DD");
  const startTime = values.event_start_time.format("HH:mm:ss");
  const endTime = values.event_end_time.format("HH:mm:ss");

  const event_start_time = dayjs.utc(`${date}T${startTime}`).toISOString();
  const event_end_time = dayjs.utc(`${date}T${endTime}`).toISOString();

  const payload = {
    event_name: values.event_name,
    location_id: "6cada788-05aa-4784-88c7-55c4932e04f5",
    event_capacity: values.event_capacity,
    event_date: dayjs(values.event_date).format("YYYY-MM-DD"), // or .toISOString() if full date-time
    event_start_time,
    event_end_time,
    event_description: values.event_description,
    event_type: values.event_type,
    is_competitive: values.is_competitive || false,
  };
  // Insert into Supabase
    const { error } = await supabase.from("events").insert([payload]);

    if (error) {
      console.error("Supabase insert error:", error);
      message.error("Failed to create event.");
      return;
    }

    message.success("Event created successfully!");
    form.resetFields();
    setIsEventFromOpen(false);
 }
 catch (err) {
    console.error("Form processing error:", err);
    message.error("Something went wrong.");
  }

  
};


    return(
        <Modal
      open={isEventFromOpen}
      footer={null}
      onCancel={onClose}
      title="Create New Event"
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Event Name"
          name="event_name"
          rules={[{ required: true, message: "Please enter event name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location_id"
          rules={[{ required: true, message: "Please enter location" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Event Capacity"
          name="event_capacity"
          rules={[{ required: true, message: "Please enter event capacity" }]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Event Date"
          name="event_date"
          rules={[{ required: true, message: "Please select date" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Event Start Time"
          name="event_start_time"
          rules={[{ required: true, message: "Please select start time" }]}
        >
          <TimePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Event End Time"
          name="event_end_time"
          rules={[{ required: true, message: "Please select end time" }]}
        >
          <TimePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Event Description"
          name="event_description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Event Type"
          name="event_type"
          initialValue="individual"
          rules={[{ required: true, message: "Please select event type" }]}
        >
          <Radio.Group>
            <Radio value="individual">Individual</Radio>
            <Radio value="team">Team</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="is_competitive" valuePropName="checked">
          <Checkbox>Competitive</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={onClose} style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
    )
}
export default EventsForm;