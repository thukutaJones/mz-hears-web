import { baseUrl } from "@/contants/baseUrl";
import axios from "axios";

export const getFacilityId = async (operator: string, token: string) => {
  const res = await axios.get(
    `${baseUrl}/api/v1/facility/operator/${operator}`
  );
  return res.data?.facility?._id;
};
