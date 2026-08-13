export class LoginData {
    url = "https://practicesoftwaretesting.com/";
    public data: Record<string, string> = {
        Firstname: 'a',
        Lastname: 'abc',
        DOB: '1990-01-01',
        Country:'India',
        Postalcode: '12345',
        HouseNumber: '123',
        City: 'City Name',
        state: 'state',
        phone: '1234567890',
        email: 'ab@a.com',
        password: 'Test@123'
    }
    

    url1 = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    public data1: Record<string, string> = {
        username: 'Admin',
        password: 'admin123',
    }
    


public menutaburls = {
    Adminurl: "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    PIMurl: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
    Leaveurl: "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList",
    Timeurl: "https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet",
    Recruitmenturl: "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates",
    MyInfourl: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7",
    Performanceurl: "https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview",
    Dashboardurl: "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    Directoryurl: "https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory",
    Maintenanceurl: "https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee",
    Claimurl: "https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim",
    Buzzurl: "https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz",

};

}


