import axios from "axios";



class ApiServices {
  browserInfo = navigator.userAgent;

  constructor() {
    axios.interceptors.request.use((request) => {
      if(this.browserInfo) {
        request.headers["Browser-Info"] = this.browserInfo;
      }
      return request;
    });

    axios.interceptors.response.use((response) => response, 
    (error) => {
      const {config, response} = error;
      if(response.status === 500) {
        alert("Error with code 500")
      }
    })
  }

  getRequest(url: string) {
    return axios.get(url);
  }

  postRequest(url:string, args: any) {
    return axios.post(url, args);
  }

  putRequest(url:string, args: any) {
    return axios.put(url, args);
  }

  deleteRequest(url:string) {
    return axios.delete(url);
  }
}

const ApiService = new ApiServices();
export default ApiService;
