import { API_URL } from "../../AppApi";
import ApiService from "../../services/ApiService";


interface UserProps {
  name:string;
}

class UsersServices {
  async getUser(id:string) {
    try {
      const userId = id ? `/${id}` : "";
      const response = await ApiService.getRequest(API_URL + userId);
      return response.data;
    } catch (error) {
      console.error("Error in getUser", error);
      throw error
    }
  }

  async postUser(user: UserProps) {
    try {
      const response = await ApiService.postRequest(API_URL, user);
      return response.data;
    } catch (error) {
      console.error("Error in postUser", error);
      throw error;
    }
  }

  async updateUser(id:string, user: UserProps) {
    try {
      const userId = id ? `/${id}` : "";
      const response = await ApiService.putRequest(API_URL + userId, user);
      return response.data;
    } catch (error) {
      console.error("Error in postUser", error);
      throw error;
    }
  }

  async deleteUser(id:string) {
    try {
      const userId = id ? `/${id}` : "";
      const response = await ApiService.deleteRequest(API_URL + userId)
      return response.data;
    } catch (error) {
      console.error("Error in deleteUser", error);
      throw error;
    }
  }

}

const UsersService = new UsersServices();
export default UsersService;