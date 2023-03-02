import axios from "axios";
import { toast } from "react-hot-toast";

export const manageRoom = async (payload, header) => {
  const token = localStorage.getItem("token");
  try {
    return await axios.post("http://localhost:8000/room/add-room", payload, {
      headers: { Authorization: `Bearer ${token}`, ...header },
    });
  } catch (error) {
    console.log("=== Error ===", error);
  }
};

export const myRoom = async () => {
  const token = localStorage.getItem("token");
  try {
    return await axios.get("http://localhost:8000/room/my-rooms", {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log("=== Error ===", error);
    toast.error(error.message);
  }
};
