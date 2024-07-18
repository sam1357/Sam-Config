/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./cypress/e2e/login.cy.ts ***!
  \*********************************/

describe("The Login Page", function () {
    it("checks that input validation is correct", function () {
        cy.visit("/login");
        cy.get("button").contains("Login").click();
        cy.contains("Email is required.");
        cy.contains("Password is required.");
        cy.get("input[name=email]").type("a");
        cy.get("input[name=password]").type("a");
        cy.get("button").contains("Login").click();
        cy.contains("Please provide a valid email.");
        cy.get("input[name=email]").clear();
    });
    it("successfully redirects on success", function () {
        var email = "a@a.com";
        var password = "a";
        cy.login(email, password);
    });
    it("check that once logged in, home page should no longer have login button", function () {
        var email = "a@a.com";
        var password = "a";
        cy.login(email, password);
        cy.visit("/");
        cy.get("button[name=login]").should("not.exist");
    });
    it("check that incorrect credentials show error", function () {
        cy.visit("/login");
        cy.get("input[name=email]").type("weuofweiofjowejfowiej@weiofjoweij.com");
        cy.get("input[name=password]").type("".concat("fwehfuiowejo", "{enter}"), { log: false });
        cy.contains("Authentication Error");
    });
    it("signup page link works", function () {
        cy.visit("/login");
        cy.get('a[href*="/signup"]').click();
        cy.url().should("contain", "/signup");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi5jeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtRQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUU3QyxFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUU7UUFDdEMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVyQixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5RUFBeUUsRUFBRTtRQUM1RSxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDeEIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRXJCLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxFQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFO1FBQ2hELEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQzFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBRyxjQUFjLFlBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRWhGLEVBQUUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtRQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5CLEVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUoXCJUaGUgTG9naW4gUGFnZVwiLCAoKSA9PiB7XG4gIGl0KFwiY2hlY2tzIHRoYXQgaW5wdXQgdmFsaWRhdGlvbiBpcyBjb3JyZWN0XCIsICgpID0+IHtcbiAgICBjeS52aXNpdChcIi9sb2dpblwiKTtcbiAgICBjeS5nZXQoXCJidXR0b25cIikuY29udGFpbnMoXCJMb2dpblwiKS5jbGljaygpO1xuICAgIGN5LmNvbnRhaW5zKFwiRW1haWwgaXMgcmVxdWlyZWQuXCIpO1xuICAgIGN5LmNvbnRhaW5zKFwiUGFzc3dvcmQgaXMgcmVxdWlyZWQuXCIpO1xuXG4gICAgY3kuZ2V0KFwiaW5wdXRbbmFtZT1lbWFpbF1cIikudHlwZShcImFcIik7XG4gICAgY3kuZ2V0KFwiaW5wdXRbbmFtZT1wYXNzd29yZF1cIikudHlwZShcImFcIik7XG4gICAgY3kuZ2V0KFwiYnV0dG9uXCIpLmNvbnRhaW5zKFwiTG9naW5cIikuY2xpY2soKTtcbiAgICBjeS5jb250YWlucyhcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgZW1haWwuXCIpO1xuXG4gICAgY3kuZ2V0KFwiaW5wdXRbbmFtZT1lbWFpbF1cIikuY2xlYXIoKTtcbiAgfSk7XG5cbiAgaXQoXCJzdWNjZXNzZnVsbHkgcmVkaXJlY3RzIG9uIHN1Y2Nlc3NcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGVtYWlsID0gXCJhQGEuY29tXCI7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBcImFcIjtcblxuICAgIGN5LmxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XG4gIH0pO1xuXG4gIGl0KFwiY2hlY2sgdGhhdCBvbmNlIGxvZ2dlZCBpbiwgaG9tZSBwYWdlIHNob3VsZCBubyBsb25nZXIgaGF2ZSBsb2dpbiBidXR0b25cIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGVtYWlsID0gXCJhQGEuY29tXCI7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBcImFcIjtcblxuICAgIGN5LmxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgY3kudmlzaXQoXCIvXCIpO1xuICAgIGN5LmdldChcImJ1dHRvbltuYW1lPWxvZ2luXVwiKS5zaG91bGQoXCJub3QuZXhpc3RcIik7XG4gIH0pO1xuXG4gIGl0KFwiY2hlY2sgdGhhdCBpbmNvcnJlY3QgY3JlZGVudGlhbHMgc2hvdyBlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY3kudmlzaXQoXCIvbG9naW5cIik7XG5cbiAgICBjeS5nZXQoXCJpbnB1dFtuYW1lPWVtYWlsXVwiKS50eXBlKFwid2V1b2Z3ZWlvZmpvd2VqZm93aWVqQHdlaW9mam93ZWlqLmNvbVwiKTtcbiAgICBjeS5nZXQoXCJpbnB1dFtuYW1lPXBhc3N3b3JkXVwiKS50eXBlKGAke1wiZndlaGZ1aW93ZWpvXCJ9e2VudGVyfWAsIHsgbG9nOiBmYWxzZSB9KTtcblxuICAgIGN5LmNvbnRhaW5zKFwiQXV0aGVudGljYXRpb24gRXJyb3JcIik7XG4gIH0pO1xuXG4gIGl0KFwic2lnbnVwIHBhZ2UgbGluayB3b3Jrc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY3kudmlzaXQoXCIvbG9naW5cIik7XG5cbiAgICBjeS5nZXQoJ2FbaHJlZio9XCIvc2lnbnVwXCJdJykuY2xpY2soKTtcbiAgICBjeS51cmwoKS5zaG91bGQoXCJjb250YWluXCIsIFwiL3NpZ251cFwiKTtcbiAgfSk7XG59KTtcbiJdfQ==
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY3kudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsTUFBTSxNQUFNLFlBQVk7QUFDaEc7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNELDJDQUEyQyx1cEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2xhcnZveWFudC1mcm9udGVuZC8uL2N5cHJlc3MvZTJlL2xvZ2luLmN5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZGVzY3JpYmUoXCJUaGUgTG9naW4gUGFnZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaXQoXCJjaGVja3MgdGhhdCBpbnB1dCB2YWxpZGF0aW9uIGlzIGNvcnJlY3RcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjeS52aXNpdChcIi9sb2dpblwiKTtcbiAgICAgICAgY3kuZ2V0KFwiYnV0dG9uXCIpLmNvbnRhaW5zKFwiTG9naW5cIikuY2xpY2soKTtcbiAgICAgICAgY3kuY29udGFpbnMoXCJFbWFpbCBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgIGN5LmNvbnRhaW5zKFwiUGFzc3dvcmQgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICBjeS5nZXQoXCJpbnB1dFtuYW1lPWVtYWlsXVwiKS50eXBlKFwiYVwiKTtcbiAgICAgICAgY3kuZ2V0KFwiaW5wdXRbbmFtZT1wYXNzd29yZF1cIikudHlwZShcImFcIik7XG4gICAgICAgIGN5LmdldChcImJ1dHRvblwiKS5jb250YWlucyhcIkxvZ2luXCIpLmNsaWNrKCk7XG4gICAgICAgIGN5LmNvbnRhaW5zKFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbC5cIik7XG4gICAgICAgIGN5LmdldChcImlucHV0W25hbWU9ZW1haWxdXCIpLmNsZWFyKCk7XG4gICAgfSk7XG4gICAgaXQoXCJzdWNjZXNzZnVsbHkgcmVkaXJlY3RzIG9uIHN1Y2Nlc3NcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZW1haWwgPSBcImFAYS5jb21cIjtcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gXCJhXCI7XG4gICAgICAgIGN5LmxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgfSk7XG4gICAgaXQoXCJjaGVjayB0aGF0IG9uY2UgbG9nZ2VkIGluLCBob21lIHBhZ2Ugc2hvdWxkIG5vIGxvbmdlciBoYXZlIGxvZ2luIGJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbWFpbCA9IFwiYUBhLmNvbVwiO1xuICAgICAgICB2YXIgcGFzc3dvcmQgPSBcImFcIjtcbiAgICAgICAgY3kubG9naW4oZW1haWwsIHBhc3N3b3JkKTtcbiAgICAgICAgY3kudmlzaXQoXCIvXCIpO1xuICAgICAgICBjeS5nZXQoXCJidXR0b25bbmFtZT1sb2dpbl1cIikuc2hvdWxkKFwibm90LmV4aXN0XCIpO1xuICAgIH0pO1xuICAgIGl0KFwiY2hlY2sgdGhhdCBpbmNvcnJlY3QgY3JlZGVudGlhbHMgc2hvdyBlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN5LnZpc2l0KFwiL2xvZ2luXCIpO1xuICAgICAgICBjeS5nZXQoXCJpbnB1dFtuYW1lPWVtYWlsXVwiKS50eXBlKFwid2V1b2Z3ZWlvZmpvd2VqZm93aWVqQHdlaW9mam93ZWlqLmNvbVwiKTtcbiAgICAgICAgY3kuZ2V0KFwiaW5wdXRbbmFtZT1wYXNzd29yZF1cIikudHlwZShcIlwiLmNvbmNhdChcImZ3ZWhmdWlvd2Vqb1wiLCBcIntlbnRlcn1cIiksIHsgbG9nOiBmYWxzZSB9KTtcbiAgICAgICAgY3kuY29udGFpbnMoXCJBdXRoZW50aWNhdGlvbiBFcnJvclwiKTtcbiAgICB9KTtcbiAgICBpdChcInNpZ251cCBwYWdlIGxpbmsgd29ya3NcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjeS52aXNpdChcIi9sb2dpblwiKTtcbiAgICAgICAgY3kuZ2V0KCdhW2hyZWYqPVwiL3NpZ251cFwiXScpLmNsaWNrKCk7XG4gICAgICAgIGN5LnVybCgpLnNob3VsZChcImNvbnRhaW5cIiwgXCIvc2lnbnVwXCIpO1xuICAgIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzluYVc0dVkza3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKc2IyZHBiaTVqZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhGUVVGRk8wbEJRM3BDTEVWQlFVVXNRMEZCUXl4NVEwRkJlVU1zUlVGQlJUdFJRVU0xUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEyNUNMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlF6TkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJRenRSUVVOc1F5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVOQlFVTTdVVUZGY2tNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjBReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEhOQ1FVRnpRaXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNwRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUXpORExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNLMEpCUVN0Q0xFTkJRVU1zUTBGQlF6dFJRVVUzUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGRFTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZTQ3hGUVVGRkxFTkJRVU1zYlVOQlFXMURMRVZCUVVVN1VVRkRkRU1zU1VGQlRTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRPMUZCUTNoQ0xFbEJRVTBzVVVGQlVTeEhRVUZITEVkQlFVY3NRMEZCUXp0UlFVVnlRaXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVNMVFpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVklMRVZCUVVVc1EwRkJReXg1UlVGQmVVVXNSVUZCUlR0UlFVTTFSU3hKUVVGTkxFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVVUZEZUVJc1NVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETzFGQlJYSkNMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTI1RUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJVZ3NSVUZCUlN4RFFVRkRMRFpEUVVFMlF5eEZRVUZGTzFGQlEyaEVMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZGYmtJc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eDFRMEZCZFVNc1EwRkJReXhEUVVGRE8xRkJRekZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJSeXhqUVVGakxGbEJRVk1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSV2hHTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNRMEZCUXp0SlFVTjBReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVZJTEVWQlFVVXNRMEZCUXl4M1FrRkJkMElzUlVGQlJUdFJRVU16UWl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlJXNUNMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU55UXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVONFF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laR1Z6WTNKcFltVW9YQ0pVYUdVZ1RHOW5hVzRnVUdGblpWd2lMQ0FvS1NBOVBpQjdYRzRnSUdsMEtGd2lZMmhsWTJ0eklIUm9ZWFFnYVc1d2RYUWdkbUZzYVdSaGRHbHZiaUJwY3lCamIzSnlaV04wWENJc0lDZ3BJRDArSUh0Y2JpQWdJQ0JqZVM1MmFYTnBkQ2hjSWk5c2IyZHBibHdpS1R0Y2JpQWdJQ0JqZVM1blpYUW9YQ0ppZFhSMGIyNWNJaWt1WTI5dWRHRnBibk1vWENKTWIyZHBibHdpS1M1amJHbGpheWdwTzF4dUlDQWdJR041TG1OdmJuUmhhVzV6S0Z3aVJXMWhhV3dnYVhNZ2NtVnhkV2x5WldRdVhDSXBPMXh1SUNBZ0lHTjVMbU52Ym5SaGFXNXpLRndpVUdGemMzZHZjbVFnYVhNZ2NtVnhkV2x5WldRdVhDSXBPMXh1WEc0Z0lDQWdZM2t1WjJWMEtGd2lhVzV3ZFhSYmJtRnRaVDFsYldGcGJGMWNJaWt1ZEhsd1pTaGNJbUZjSWlrN1hHNGdJQ0FnWTNrdVoyVjBLRndpYVc1d2RYUmJibUZ0WlQxd1lYTnpkMjl5WkYxY0lpa3VkSGx3WlNoY0ltRmNJaWs3WEc0Z0lDQWdZM2t1WjJWMEtGd2lZblYwZEc5dVhDSXBMbU52Ym5SaGFXNXpLRndpVEc5bmFXNWNJaWt1WTJ4cFkyc29LVHRjYmlBZ0lDQmplUzVqYjI1MFlXbHVjeWhjSWxCc1pXRnpaU0J3Y205MmFXUmxJR0VnZG1Gc2FXUWdaVzFoYVd3dVhDSXBPMXh1WEc0Z0lDQWdZM2t1WjJWMEtGd2lhVzV3ZFhSYmJtRnRaVDFsYldGcGJGMWNJaWt1WTJ4bFlYSW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ2FYUW9YQ0p6ZFdOalpYTnpablZzYkhrZ2NtVmthWEpsWTNSeklHOXVJSE4xWTJObGMzTmNJaXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR1Z0WVdsc0lEMGdYQ0poUUdFdVkyOXRYQ0k3WEc0Z0lDQWdZMjl1YzNRZ2NHRnpjM2R2Y21RZ1BTQmNJbUZjSWp0Y2JseHVJQ0FnSUdONUxteHZaMmx1S0dWdFlXbHNMQ0J3WVhOemQyOXlaQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lHbDBLRndpWTJobFkyc2dkR2hoZENCdmJtTmxJR3h2WjJkbFpDQnBiaXdnYUc5dFpTQndZV2RsSUhOb2IzVnNaQ0J1YnlCc2IyNW5aWElnYUdGMlpTQnNiMmRwYmlCaWRYUjBiMjVjSWl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHTnZibk4wSUdWdFlXbHNJRDBnWENKaFFHRXVZMjl0WENJN1hHNGdJQ0FnWTI5dWMzUWdjR0Z6YzNkdmNtUWdQU0JjSW1GY0lqdGNibHh1SUNBZ0lHTjVMbXh2WjJsdUtHVnRZV2xzTENCd1lYTnpkMjl5WkNrN1hHNGdJQ0FnWTNrdWRtbHphWFFvWENJdlhDSXBPMXh1SUNBZ0lHTjVMbWRsZENoY0ltSjFkSFJ2Ymx0dVlXMWxQV3h2WjJsdVhWd2lLUzV6YUc5MWJHUW9YQ0p1YjNRdVpYaHBjM1JjSWlrN1hHNGdJSDBwTzF4dVhHNGdJR2wwS0Z3aVkyaGxZMnNnZEdoaGRDQnBibU52Y25KbFkzUWdZM0psWkdWdWRHbGhiSE1nYzJodmR5Qmxjbkp2Y2x3aUxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdZM2t1ZG1semFYUW9YQ0l2Ykc5bmFXNWNJaWs3WEc1Y2JpQWdJQ0JqZVM1blpYUW9YQ0pwYm5CMWRGdHVZVzFsUFdWdFlXbHNYVndpS1M1MGVYQmxLRndpZDJWMWIyWjNaV2x2Wm1wdmQyVnFabTkzYVdWcVFIZGxhVzltYW05M1pXbHFMbU52YlZ3aUtUdGNiaUFnSUNCamVTNW5aWFFvWENKcGJuQjFkRnR1WVcxbFBYQmhjM04zYjNKa1hWd2lLUzUwZVhCbEtHQWtlMXdpWm5kbGFHWjFhVzkzWldwdlhDSjllMlZ1ZEdWeWZXQXNJSHNnYkc5bk9pQm1ZV3h6WlNCOUtUdGNibHh1SUNBZ0lHTjVMbU52Ym5SaGFXNXpLRndpUVhWMGFHVnVkR2xqWVhScGIyNGdSWEp5YjNKY0lpazdYRzRnSUgwcE8xeHVYRzRnSUdsMEtGd2ljMmxuYm5Wd0lIQmhaMlVnYkdsdWF5QjNiM0pyYzF3aUxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdZM2t1ZG1semFYUW9YQ0l2Ykc5bmFXNWNJaWs3WEc1Y2JpQWdJQ0JqZVM1blpYUW9KMkZiYUhKbFppbzlYQ0l2YzJsbmJuVndYQ0pkSnlrdVkyeHBZMnNvS1R0Y2JpQWdJQ0JqZVM1MWNtd29LUzV6YUc5MWJHUW9YQ0pqYjI1MFlXbHVYQ0lzSUZ3aUwzTnBaMjUxY0Z3aUtUdGNiaUFnZlNrN1hHNTlLVHRjYmlKZGZRPT0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=