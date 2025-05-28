import { Modal } from "antd"

const EventsForm = (props) => {
    const {isEventFromOpen} = props;
    return(
        <Modal open={isEventFromOpen} footer={null}>
            Hello
        </Modal>
    )
}
export default EventsForm;