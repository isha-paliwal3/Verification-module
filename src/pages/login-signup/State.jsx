//Setting pageStatus as false so no one can directly visit OTP page with URL Manipulation

class PageStatus{
    static pageStatus = false;
    // static setPagestatus = (state) =>{
    //     this.pageStatus = state
    // } 
}

class LoggedIn{
    static isLoggedIn = false;
}

class FormStatus{
    static formStatus = false;
}

export {PageStatus, LoggedIn, FormStatus}