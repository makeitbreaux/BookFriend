import {axios, axiosConfig } from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://book-friend.herokuapp.com";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class BookFriendApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${BookFriendApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, data, method, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.message);
      let message = err.response.data.error;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes
  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await axios.post(`${BASE_URL}/auth/token`, data);
    return res.token;
  }

  /** Signup for site. */

  static async signup({ username, password, firstName, lastName, email }) {
    const axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
      }
    };
    
    const body = JSON.stringify({ username, password, firstName, lastName, email }) ;
    
    let res = await axios.post(`${BASE_URL}/auth/register`, body, axiosConfig ).then(res => console.log(res))
    .catch(err => console.log(err));;
    return res.token;
  }
  /** Save user profile page. */

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}


export default BookFriendApi;
