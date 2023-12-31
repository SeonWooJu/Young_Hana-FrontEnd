import axios from "axios";

export const LOGIN_URL = `${process.env.REACT_APP_API_SERVER_URL}/account/sing-in`;
export const CREATE_ACCOUNT_URL = `${process.env.REACT_APP_API_SERVER_URL}/account/sing-up`;

export const Account = {
    singIn: (account) => {
        account = {
            ...account,
            ui_student_no: Number(account.ui_student_no)
        }

        return axios.post(LOGIN_URL, account, {
            headers: {
                "access-control-allow-origin": process.env.REACT_APP_URL,
                "access-control-allow-headers": '*'
            }
        });
    },
    singUp: (userData) => {
        userData = {
            ...userData,
            ui_student_no: Number(userData.ui_student_no)
        };
        return axios.post(CREATE_ACCOUNT_URL, userData, {
            headers: {
                "access-control-allow-origin": process.env.REACT_APP_URL,
                "access-control-allow-headers": '*'
            }
        });
    }
}