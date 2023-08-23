export const regular = {
    studentNo: (student_no) => {
        return /^[0-9]*$/.test(student_no);
    },
    email: (email) => {
        return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])+@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])+(\.([a-zA-Z]{2,3}))?\.[a-zA-Z]{2,3}$/.test(email);
    },
    phoneNo: (phone_no) => {
        return /^010([0-9]{4})([0-9]{4})$/.test(phone_no);
    },
    password: (pw) => {
        return /^[a-z0-9{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]{10,20}$/.test(pw);
    }
}