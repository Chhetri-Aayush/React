import { useForm } from "react-hook-form";
import axios from "axios";

function CreateEvent() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://api.example.com/events", data);
      alert("Event created successfully");
    } catch (error) {
      console.error("Failed to create event", error);
    }
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Event Name</label>
          <input {...register("eventName")} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            {...register("description")}
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
