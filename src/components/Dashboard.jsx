import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.svg";
import notification from "../images/notifications.svg";
import frame1 from "../images/frame1.svg";
import frame2 from "../images/frame2.svg";
import button from "../images/Button.svg";
import filter from "../images/filter.svg";
import avatar2 from "../images/avatar2.svg";
import arrow from "../images/arrow.svg";

const Dashboard = () => {
  return (
    <div className="flex gap-4 w-full overflow-y-hidden p-6 bg-[#f3fafc]">
      <div className="first-container flex flex-col justify-between p-4 w-1/7 rounded-2xl bg-[#143566] h-screen">
        <div>
          <div className="logo border-b pb-6 border-slate-600 mb-8">
            <img className="" src={logo} alt="logo" />
          </div>
          <div className="flex gap-4 items-center py-2 px-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.07581 8.36719C9.32113 8.61192 9.65351 8.74937 10 8.74937C10.3466 8.74937 10.6789 8.61192 10.9242 8.36719L13.3672 5.92344C13.4886 5.80213 13.5848 5.65811 13.6505 5.4996C13.7162 5.34109 13.75 5.17119 13.75 4.99961C13.75 4.82803 13.7162 4.65813 13.6505 4.49962C13.5848 4.3411 13.4886 4.19708 13.3672 4.07578L10.9242 1.63203C10.6789 1.38729 10.3466 1.24985 10 1.24985C9.65351 1.24985 9.32113 1.38729 9.07581 1.63203L6.63284 4.07578C6.51149 4.19708 6.41523 4.3411 6.34956 4.49962C6.28388 4.65813 6.25008 4.82803 6.25008 4.99961C6.25008 5.17119 6.28388 5.34109 6.34956 5.4996C6.41523 5.65811 6.51149 5.80213 6.63284 5.92344L9.07581 8.36719ZM7.51331 4.95937L9.95706 2.5164C9.96745 2.5061 9.98149 2.50032 9.99612 2.50032C10.0108 2.50032 10.0248 2.5061 10.0352 2.5164L12.4789 4.95937C12.4887 4.97004 12.4941 4.98397 12.4941 4.99844C12.4941 5.0129 12.4887 5.02684 12.4789 5.0375L10.0399 7.48359C10.0294 7.49371 10.0154 7.49937 10.0008 7.49937C9.98624 7.49937 9.97223 7.49371 9.96175 7.48359L7.51643 5.03984C7.50598 5.02906 7.50014 5.01463 7.50014 4.99961C7.50014 4.98459 7.50598 4.97016 7.51643 4.95937H7.51331ZM18.3649 9.07578L15.9242 6.63203C15.6791 6.38734 15.3468 6.24991 15.0004 6.24991C14.654 6.24991 14.3218 6.38734 14.0766 6.63203L11.6328 9.07578C11.3881 9.3211 11.2507 9.65347 11.2507 10C11.2507 10.3465 11.3881 10.6789 11.6328 10.9242L14.0766 13.368C14.3218 13.6127 14.654 13.7501 15.0004 13.7501C15.3468 13.7501 15.6791 13.6127 15.9242 13.368L18.368 10.9242C18.6127 10.6789 18.7502 10.3465 18.7502 10C18.7502 9.65347 18.6127 9.3211 18.368 9.07578H18.3649ZM17.4844 10.0398L15.0407 12.4836C15.03 12.4934 15.0161 12.4988 15.0016 12.4988C14.9871 12.4988 14.9732 12.4934 14.9625 12.4836L12.5188 10.0398C12.5087 10.0294 12.503 10.0154 12.503 10.0008C12.503 9.98621 12.5087 9.9722 12.5188 9.96172L14.9625 7.51797C14.9732 7.50819 14.9871 7.50277 15.0016 7.50277C15.0161 7.50277 15.03 7.50819 15.0407 7.51797L17.4844 9.96172C17.4945 9.9722 17.5002 9.98621 17.5002 10.0008C17.5002 10.0154 17.4945 10.0294 17.4844 10.0398ZM8.36722 9.07578L5.92347 6.63203C5.67828 6.38734 5.34603 6.24991 4.99964 6.24991C4.65324 6.24991 4.321 6.38734 4.07581 6.63203L1.63206 9.07578C1.38732 9.3211 1.24988 9.65347 1.24988 10C1.24988 10.3465 1.38732 10.6789 1.63206 10.9242L4.07581 13.368C4.321 13.6127 4.65324 13.7501 4.99964 13.7501C5.34603 13.7501 5.67828 13.6127 5.92347 13.368L8.36722 10.9242C8.61195 10.6789 8.7494 10.3465 8.7494 10C8.7494 9.65347 8.61195 9.3211 8.36722 9.07578ZM7.48362 10.0398L5.03987 12.4836C5.02921 12.4934 5.01527 12.4988 5.00081 12.4988C4.98635 12.4988 4.97241 12.4934 4.96175 12.4836L2.51565 10.0398C2.50553 10.0294 2.49988 10.0154 2.49988 10.0008C2.49988 9.98621 2.50553 9.9722 2.51565 9.96172L4.9594 7.5164C4.97007 7.50663 4.984 7.50121 4.99847 7.50121C5.01293 7.50121 5.02687 7.50663 5.03753 7.5164L7.48128 9.96015C7.48668 9.96522 7.49102 9.97131 7.49407 9.97806C7.49711 9.98482 7.49879 9.99211 7.49901 9.99951C7.49922 10.0069 7.49798 10.0143 7.49534 10.0212C7.4927 10.0281 7.48872 10.0345 7.48362 10.0398ZM10.9211 11.6328C10.6758 11.3881 10.3434 11.2506 9.9969 11.2506C9.65038 11.2506 9.318 11.3881 9.07268 11.6328L6.63284 14.0766C6.51149 14.1979 6.41523 14.3419 6.34956 14.5004C6.28388 14.6589 6.25008 14.8288 6.25008 15.0004C6.25008 15.172 6.28388 15.3419 6.34956 15.5004C6.41523 15.6589 6.51149 15.8029 6.63284 15.9242L9.07581 18.368C9.32113 18.6127 9.65351 18.7501 10 18.7501C10.3466 18.7501 10.6789 18.6127 10.9242 18.368L13.3672 15.9242C13.4886 15.8029 13.5848 15.6589 13.6505 15.5004C13.7162 15.3419 13.75 15.172 13.75 15.0004C13.75 14.8288 13.7162 14.6589 13.6505 14.5004C13.5848 14.3419 13.4886 14.1979 13.3672 14.0766L10.9211 11.6328ZM12.4836 15.0406L10.0399 17.4836C10.0295 17.4939 10.0154 17.4997 10.0008 17.4997C9.98618 17.4997 9.97214 17.4939 9.96175 17.4836L7.51643 15.0406C7.50666 15.03 7.50124 15.016 7.50124 15.0016C7.50124 14.9871 7.50666 14.9732 7.51643 14.9625L9.96019 12.5187C9.97067 12.5086 9.98467 12.503 9.99925 12.503C10.0138 12.503 10.0278 12.5086 10.0383 12.5187L12.4821 14.9625C12.492 14.973 12.4977 14.9868 12.498 15.0013C12.4983 15.0157 12.4932 15.0298 12.4836 15.0406Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-white text-sm font-normal">Dashboard</div>
          </div>
        </div>
        <div className="border-t pt-6 border-slate-600">
          <div className="flex gap-4 items-center py-2 px-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 6.25C9.25835 6.25 8.53332 6.46993 7.91664 6.88198C7.29995 7.29404 6.81931 7.87971 6.53548 8.56493C6.25165 9.25016 6.17739 10.0042 6.32208 10.7316C6.46678 11.459 6.82393 12.1272 7.34838 12.6516C7.87282 13.1761 8.54101 13.5332 9.26844 13.6779C9.99587 13.8226 10.7499 13.7484 11.4351 13.4645C12.1203 13.1807 12.706 12.7001 13.118 12.0834C13.5301 11.4667 13.75 10.7417 13.75 10C13.749 9.00575 13.3536 8.05252 12.6505 7.34949C11.9475 6.64645 10.9943 6.25103 10 6.25ZM10 12.5C9.50557 12.5 9.02222 12.3534 8.6111 12.0787C8.19998 11.804 7.87955 11.4135 7.69033 10.9567C7.50111 10.4999 7.4516 9.99722 7.54806 9.51227C7.64453 9.02732 7.88263 8.58186 8.23226 8.23223C8.58189 7.8826 9.02735 7.6445 9.5123 7.54803C9.99725 7.45157 10.4999 7.50108 10.9567 7.6903C11.4135 7.87952 11.804 8.19995 12.0787 8.61107C12.3534 9.02219 12.5 9.50554 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.299 12.2366 10.6631 12.5 10 12.5ZM18.5891 8.37578C18.5717 8.28777 18.5355 8.20453 18.4831 8.13174C18.4306 8.05894 18.3632 7.99829 18.2852 7.9539L15.9547 6.62578L15.9453 3.99921C15.9451 3.90876 15.9251 3.81944 15.887 3.73743C15.8488 3.65542 15.7933 3.58267 15.7242 3.52421C14.8789 2.80913 13.9054 2.26114 12.8555 1.90937C12.7728 1.88139 12.6852 1.87103 12.5983 1.87897C12.5113 1.88691 12.427 1.91297 12.3508 1.95546L10 3.26953L7.6469 1.95312C7.57061 1.91038 7.48621 1.88413 7.39914 1.87605C7.31207 1.86798 7.22428 1.87826 7.14143 1.90625C6.09233 2.26059 5.11994 2.81067 4.27581 3.52734C4.20688 3.58571 4.15142 3.65833 4.11325 3.7402C4.07508 3.82206 4.05511 3.91123 4.05471 4.00156L4.043 6.63046L1.71253 7.95859C1.63456 8.00298 1.56706 8.06363 1.51462 8.13642C1.46218 8.20922 1.42603 8.29245 1.40862 8.38046C1.19534 9.45225 1.19534 10.5556 1.40862 11.6273C1.42603 11.7154 1.46218 11.7986 1.51462 11.8714C1.56706 11.9442 1.63456 12.0048 1.71253 12.0492L4.043 13.3773L4.05237 16.0039C4.05265 16.0944 4.07257 16.1837 4.11074 16.2657C4.14891 16.3477 4.20443 16.4204 4.27346 16.4789C5.11883 17.194 6.09234 17.742 7.14221 18.0937C7.22489 18.1217 7.31252 18.1321 7.39944 18.1241C7.48636 18.1162 7.57066 18.0902 7.6469 18.0477L10 16.7305L12.3532 18.0469C12.4463 18.0988 12.5512 18.1257 12.6578 18.125C12.7261 18.125 12.7939 18.1139 12.8586 18.0922C13.9076 17.7383 14.88 17.1888 15.7242 16.4727C15.7932 16.4143 15.8486 16.3417 15.8868 16.2598C15.925 16.1779 15.9449 16.0888 15.9453 15.9984L15.9571 13.3695L18.2875 12.0414C18.3655 11.997 18.433 11.9364 18.4854 11.8636C18.5379 11.7908 18.574 11.7075 18.5914 11.6195C18.8035 10.5486 18.8027 9.4464 18.5891 8.37578ZM17.4172 11.1031L15.1852 12.3727C15.0874 12.4283 15.0064 12.5092 14.9508 12.607C14.9055 12.6852 14.8578 12.768 14.8094 12.8461C14.7474 12.9446 14.7144 13.0586 14.7141 13.175L14.7024 15.6945C14.1024 16.1657 13.434 16.5424 12.7203 16.8117L10.4688 15.557C10.3753 15.5053 10.2701 15.4784 10.1633 15.4789H10.1485C10.0539 15.4789 9.95862 15.4789 9.86409 15.4789C9.75228 15.4761 9.64174 15.5031 9.54378 15.557L7.29065 16.8148C6.57543 16.5476 5.9052 16.1727 5.30315 15.7031L5.29456 13.1875C5.29417 13.0709 5.26116 12.9567 5.19925 12.8578C5.15081 12.7797 5.10315 12.7016 5.05862 12.6187C5.0034 12.5194 4.92244 12.4369 4.82425 12.3797L2.58987 11.107C2.47424 10.3756 2.47424 9.63061 2.58987 8.89921L4.818 7.62734C4.91579 7.57173 4.99676 7.49076 5.05237 7.39296C5.09768 7.31484 5.14534 7.23203 5.19378 7.1539C5.25578 7.05538 5.28881 6.9414 5.28909 6.825L5.30081 4.30546C5.90075 3.83433 6.56914 3.45759 7.28284 3.18828L9.53128 4.44296C9.62913 4.49721 9.73975 4.52419 9.85159 4.52109C9.94612 4.52109 10.0414 4.52109 10.136 4.52109C10.2478 4.52388 10.3583 4.49692 10.4563 4.44296L12.7094 3.18515C13.4246 3.4524 14.0949 3.82729 14.6969 4.29687L14.7055 6.81249C14.7059 6.92913 14.7389 7.04333 14.8008 7.14218C14.8492 7.22031 14.8969 7.29843 14.9414 7.38125C14.9966 7.48055 15.0776 7.56314 15.1758 7.62031L17.4102 8.89296C17.5274 9.62492 17.5287 10.3708 17.4141 11.1031H17.4172Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-white text-sm font-normal flex gap-14">
              Settings{" "}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6922 7.9422L10.4422 14.1922C10.3841 14.2503 10.3152 14.2964 10.2393 14.3279C10.1634 14.3593 10.0821 14.3755 9.99998 14.3755C9.91785 14.3755 9.83652 14.3593 9.76064 14.3279C9.68477 14.2964 9.61584 14.2503 9.55779 14.1922L3.30779 7.9422C3.19052 7.82492 3.12463 7.66586 3.12463 7.50001C3.12463 7.33416 3.19052 7.1751 3.30779 7.05782C3.42507 6.94055 3.58413 6.87466 3.74998 6.87466C3.91583 6.87466 4.07489 6.94055 4.19217 7.05782L9.99998 12.8664L15.8078 7.05782C15.8659 6.99976 15.9348 6.95369 16.0107 6.92227C16.0865 6.89084 16.1679 6.87466 16.25 6.87466C16.3321 6.87466 16.4134 6.89084 16.4893 6.92227C16.5652 6.95369 16.6341 6.99976 16.6922 7.05782C16.7502 7.11589 16.7963 7.18483 16.8277 7.2607C16.8592 7.33657 16.8753 7.41789 16.8753 7.50001C16.8753 7.58213 16.8592 7.66345 16.8277 7.73932C16.7963 7.81519 16.7502 7.88413 16.6922 7.9422Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center py-2 px-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.75 16.875C8.75 17.0408 8.68415 17.1997 8.56694 17.3169C8.44973 17.4342 8.29076 17.5 8.125 17.5H3.75C3.41848 17.5 3.10054 17.3683 2.86612 17.1339C2.6317 16.8995 2.5 16.5815 2.5 16.25V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H8.125C8.29076 2.5 8.44973 2.56585 8.56694 2.68306C8.68415 2.80027 8.75 2.95924 8.75 3.125C8.75 3.29076 8.68415 3.44973 8.56694 3.56694C8.44973 3.68415 8.29076 3.75 8.125 3.75H3.75V16.25H8.125C8.29076 16.25 8.44973 16.3158 8.56694 16.4331C8.68415 16.5503 8.75 16.7092 8.75 16.875ZM17.3172 9.55781L14.1922 6.43281C14.0749 6.31554 13.9159 6.24965 13.75 6.24965C13.5841 6.24965 13.4251 6.31554 13.3078 6.43281C13.1905 6.55009 13.1247 6.70915 13.1247 6.875C13.1247 7.04085 13.1905 7.19991 13.3078 7.31719L15.3664 9.375H8.125C7.95924 9.375 7.80027 9.44085 7.68306 9.55806C7.56585 9.67527 7.5 9.83424 7.5 10C7.5 10.1658 7.56585 10.3247 7.68306 10.4419C7.80027 10.5592 7.95924 10.625 8.125 10.625H15.3664L13.3078 12.6828C13.1905 12.8001 13.1247 12.9591 13.1247 13.125C13.1247 13.2909 13.1905 13.4499 13.3078 13.5672C13.4251 13.6845 13.5841 13.7503 13.75 13.7503C13.9159 13.7503 14.0749 13.6845 14.1922 13.5672L17.3172 10.4422C17.3753 10.3841 17.4214 10.3152 17.4529 10.2393C17.4843 10.1635 17.5005 10.0821 17.5005 10C17.5005 9.91787 17.4843 9.83654 17.4529 9.76066C17.4214 9.68479 17.3753 9.61586 17.3172 9.55781Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-white text-sm font-normal">
              <Link to="/logout"> Logout</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="second-container flex-auto bg-white w-5/7 border rounded-2xl">
        <div className="header flex items-center gap-6 py-4 px-6  border-b border-[#ECEEEE]">
          <div className="flex-auto font-semibold text-lg text-[#131515]">
            Student Management
          </div>
          <div className="flex-auto flex justify-end">
            <img className="" src={notification} alt="notification" />
          </div>
          <div>
            <div className="font-medium text-sm text-[#131515]">
              Jaiyeola Muhandis
            </div>
            <div className="text-right text-sm font-normal text-[#748181]">
              Admin
            </div>
          </div>
          <div>
            <img className="" src={avatar} alt="avater" />
          </div>
        </div>
        <div className="body1 flex border-b border-[#ECEEEE]  gap-6">
          <div className="border-2 items-center gap-5 flex-auto flex text-white p-6 rounded-2xl bg-[#36A1C5]">
            <div className="mb-4">
              <img className="" src={frame1} alt="frame1" />
            </div>
            <div className="">
              <div className="font-normal text-sm items-center mb-2">
                Total Number of Students
              </div>
              <div className="font-semibold text-2xl items-center">200,000</div>
            </div>
          </div>
          <div className="border-2 items-center gap-5 flex-auto flex p-6 rounded-2xl">
            <div className="mb-4">
              <img className="" src={frame2} alt="frame2" />
            </div>
            <div className="">
              <div className="font-normal text-sm items-center mb-2 text-[#748181]">
                Active Students
              </div>
              <div className="font-semibold text-2xl items-center text-[#131515]">
                100,000
              </div>
            </div>
          </div>
          <div className="border-2 items-center gap-5 flex-auto flex p-6 rounded-2xl">
            <div className="mb-4">
              <img className="" src={frame2} alt="frame2" />
            </div>
            <div className="">
              <div className="font-normal text-sm items-center mb-2 text-[#748181]">
                Graduated Students
              </div>
              <div className="font-semibold text-2xl items-center text-[#131515]">
                100,000
              </div>
            </div>
          </div>
        </div>
        <div className="body2 flex h-10 justify-between items-center mt-4 pl-6">
          <div className="flex text-[#131515] text-base font-semibold gap-4 items-center">
            <div>Student Lists</div>
            <div className="flex gap-2 items-center border rounded-full border-[#DFE2E2] p-4 w-72">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14.3538 13.6463L11.2244 10.5175C12.1314 9.42857 12.5837 8.03187 12.4872 6.61796C12.3906 5.20405 11.7527 3.88179 10.7061 2.92624C9.65951 1.97069 8.2848 1.45541 6.86796 1.48761C5.45113 1.51981 4.10125 2.09701 3.09913 3.09912C2.09702 4.10123 1.51983 5.45111 1.48763 6.86795C1.45543 8.28478 1.9707 9.65949 2.92625 10.7061C3.88181 11.7527 5.20407 12.3906 6.61798 12.4872C8.03189 12.5837 9.42859 12.1314 10.5175 11.2244L13.6463 14.3538C13.6927 14.4002 13.7479 14.4371 13.8086 14.4622C13.8693 14.4873 13.9343 14.5003 14 14.5003C14.0657 14.5003 14.1308 14.4873 14.1915 14.4622C14.2522 14.4371 14.3073 14.4002 14.3538 14.3538C14.4002 14.3073 14.4371 14.2522 14.4622 14.1915C14.4874 14.1308 14.5003 14.0657 14.5003 14C14.5003 13.9343 14.4874 13.8693 14.4622 13.8086C14.4371 13.7479 14.4002 13.6927 14.3538 13.6463ZM2.50002 7.00001C2.50002 6.10999 2.76394 5.23996 3.25841 4.49994C3.75287 3.75992 4.45568 3.18314 5.27795 2.84255C6.10021 2.50195 7.00501 2.41284 7.87793 2.58647C8.75084 2.76011 9.55266 3.18869 10.182 3.81802C10.8113 4.44736 11.2399 5.24918 11.4136 6.1221C11.5872 6.99501 11.4981 7.89981 11.1575 8.72208C10.8169 9.54435 10.2401 10.2472 9.50009 10.7416C8.76007 11.2361 7.89004 11.5 7.00002 11.5C5.80695 11.4987 4.66313 11.0242 3.8195 10.1805C2.97587 9.3369 2.50134 8.19307 2.50002 7.00001Z"
                    fill="#748181"
                  />
                </svg>
              </div>
              <div className="text-[#748181] ">
                <input
                  className="focus:outline-none appearance-none"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              {" "}
              <img className="" src={button} alt="frame1" />
            </div>
            <div>
              {" "}
              <img className="" src={filter} alt="frame1" />
            </div>
            <button 
            type="button"
            className="text-white bg-[#36A1C5] border rounded-full border-[#DFE2E2] font-medium text-base py-2.5 px-3" >
              Add New Students</button>
          </div>
        </div>
        <div className="body3 mt-4 p-6">
          <div className="flex gap-3 items-center border-b border-[#ECEEEE] text-base font-normal text-[#748181] pb-3">
            <div className="flex-auto">Student Name</div>
            <div className="flex-auto">Student ID</div>
            <div className="flex-auto">Course</div>
            <div className="flex-auto">Faculty</div>
            <div className="flex-auto">Location</div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          <div className="flex mt-2.5 items-center border-b border-[#ECEEEE]">
            <div className="flex flex-auto gap-2 items-center mb-2">
              <div>
                <img className="" src={avatar2} alt="frame1" />
              </div>
              <div>
                <div className="font-medium text-sm text-[#131515]">Halimat Adebakin</div>
                <div className="font-normal text-xs text-[#748181]">halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div className="flex-auto font-medium text-sm text-[#131515]">160407054</div>
            <div className="flex-auto font-medium text-sm text-[#131515] ">Systems Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Engineering</div>
            <div className="flex-auto font-medium text-sm text-[#131515]">Yaba</div>
            <div className="">
              <img className="" src={arrow} alt="frame1" />
            </div>
          </div>
          {/* <div className="flex">
            <div className="flex gap-2 items-center mb-2">
              <div><img className="" src={avatar2} alt="frame1" /></div>
              <div>
                <div>Halimat Adebakin</div>
                <div>halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className="flex">
            <div className="flex gap-2 items-center mb-2">
              <div><img className="" src={avatar2} alt="frame1" /></div>
              <div>
                <div>Halimat Adebakin</div>
                <div>halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className="flex">
            <div className="flex gap-2 items-center mb-2">
              <div><img className="" src={avatar2} alt="frame1" /></div>
              <div>
                <div>Halimat Adebakin</div>
                <div>halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className="flex">
            <div className="flex gap-2 items-center mb-2">
              <div><img className="" src={avatar2} alt="frame1" /></div>
              <div>
                <div>Halimat Adebakin</div>
                <div>halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className="flex">
            <div className="flex gap-2 items-center mb-2">
              <div><img className="" src={avatar2} alt="frame1" /></div>
              <div>
                <div>Halimat Adebakin</div>
                <div>halimatadebakin@gmail.com</div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
