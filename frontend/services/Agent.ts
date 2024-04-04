import axios from "axios";
import { initiateUser, deleteUser } from "@/store/actions/userAction";
import { constants } from "@/app/constants";
import { headers } from "next/dist/client/components/headers";
import { ApiHeader } from "@/app/apiConstants";
import { authHeader } from "@/app/apiConstants";
import { toast } from "react-toastify";
export const getAgent = async (dispatch) => {
  try {
    const res = ApiHeader.get(
      '/api/user/getUsers', authHeader()
    );
    const data = (await res).data;
    return dispatch(initiateUser(data));
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const deleteAgent = async (dispatch: any, id: any) => {
  try {
    const res = ApiHeader.delete(`/api/user/userDelete/${id}`, authHeader());
    console.log("id", id);
    return dispatch(deleteUser(id));

  } catch (error) {
    console.log("error in update (service) => ", error.response.data);
    toast.error(error.response.data.message)
  }
};

// export const createStation = async (formData) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/station/create`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       }
//     );
//     const data = res.json();
//     return data;
//   } catch (error) {
//     console.log("error in register (service) => ", error);
//   }
// };