import {
  ErrorMonth,
  ErrorUser,
  LcUsage,
  RawNumbers,
  RecordState,
  RlcMember,
  UserAction,
  UserLogin,
  UserLoginMonth,
} from "@/types/statistic";
import axios from "axios";

class StatisticService {
  getUserActionsMonth() {
    return axios
      .get<UserAction[]>("statistic/user_actions_month/")
      .then((response) => response.data);
  }

  getRlcMembers() {
    return axios
      .get<RlcMember[]>("statistic/rlc_members/")
      .then((response) => response.data);
  }

  getRecordStates() {
    return axios
      .get<RecordState[]>("statistic/record_states/")
      .then((response) => response.data);
  }

  getLcUsage() {
    return axios
      .get<LcUsage[]>("statistic/lc_usage/")
      .then((response) => response.data);
  }

  getUserLogins() {
    return axios
      .get<UserLogin[]>("statistic/user_logins/")
      .then((response) => response.data);
  }

  getUserLoginsMonth() {
    return axios
      .get<UserLoginMonth[]>("statistic/user_logins_month/")
      .then((response) => response.data);
  }

  getErrors() {
    return axios
      .get<ErrorMonth[]>("statistic/errors_month/")
      .then((response) => response.data);
  }

  getUserErrors() {
    return axios
      .get<ErrorUser[]>("statistic/errors_user/")
      .then((response) => response.data);
  }

  getRawNumbers() {
    return axios
      .get<RawNumbers>("statistic/raw_numbers/")
      .then((response) => response.data);
  }
}

export default new StatisticService();
