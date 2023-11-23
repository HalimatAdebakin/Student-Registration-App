import React, { useState } from "react";
import Select from "react-select";

function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    course: "",
    faculty: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleGenderChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: selectedOption.value,
    }));
  };

  const handleCourseChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      course: selectedOption.value,
    }));
  };

  const handleFacultyChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      faculty: selectedOption.value,
    }));
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const courseOptions = [
    { value: "systems-engineering", label: "Systems Engineering" },
    { value: "computer-science", label: "Computer Science" },
    { value: "physics", label: "Physics" },
  ];

  const facultyOptions = [
    { value: "engineering", label: "Engineering" },
    { value: "science", label: "Science" },
    { value: "arts", label: "Arts" },
  ];
  return (
    <div className="">
        <div className="flex justify-end w-[730px] mx-auto ">
      <div className="rounded-full bg-[white] w-12 h-12 mb-4 flex justify-center items-center border-[#ECEEEE] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M12.8538 12.1463C12.9002 12.1927 12.9371 12.2479 12.9622 12.3086C12.9874 12.3693 13.0003 12.4343 13.0003 12.5C13.0003 12.5657 12.9874 12.6308 12.9622 12.6915C12.9371 12.7521 12.9002 12.8073 12.8538 12.8538C12.8073 12.9002 12.7522 12.9371 12.6915 12.9622C12.6308 12.9873 12.5657 13.0003 12.5 13.0003C12.4343 13.0003 12.3693 12.9873 12.3086 12.9622C12.2479 12.9371 12.1927 12.9002 12.1463 12.8538L8.00003 8.70688L3.85378 12.8538C3.75996 12.9476 3.63272 13.0003 3.50003 13.0003C3.36735 13.0003 3.2401 12.9476 3.14628 12.8538C3.05246 12.7599 2.99976 12.6327 2.99976 12.5C2.99976 12.3673 3.05246 12.2401 3.14628 12.1463L7.29316 8L3.14628 3.85375C3.05246 3.75993 2.99976 3.63269 2.99976 3.5C2.99976 3.36732 3.05246 3.24007 3.14628 3.14625C3.2401 3.05243 3.36735 2.99973 3.50003 2.99973C3.63272 2.99973 3.75996 3.05243 3.85378 3.14625L8.00003 7.29313L12.1463 3.14625C12.2401 3.05243 12.3674 2.99973 12.5 2.99973C12.6327 2.99973 12.76 3.05243 12.8538 3.14625C12.9476 3.24007 13.0003 3.36732 13.0003 3.5C13.0003 3.63269 12.9476 3.75993 12.8538 3.85375L8.70691 8L12.8538 12.1463Z"
            fill="#748181"
          />
        </svg>
      </div>
      </div>
      <div className="mx-auto items-center rounded-2xl p-6 bg-[white] w-[730px]">
        <h2 className="text-base text-[#131515] text-center font-medium mb-4">
          Basic Information
        </h2>
        <form>
          <div className="flex gap-4 items-center">
            <div className="rounded-full bg-[#D9D9D9] w-16 h-16 mb-6 relative">
              <div className="rounded-full w-8 h-8 p-2 bg-white absolute right-0 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13 3.5H11.2675L10.4156 2.2225C10.37 2.15409 10.3082 2.098 10.2357 2.05919C10.1632 2.02038 10.0822 2.00005 10 2H6C5.91777 2.00005 5.83682 2.02038 5.76432 2.05919C5.69182 2.098 5.63001 2.15409 5.58437 2.2225L4.73187 3.5H3C2.60218 3.5 2.22064 3.65804 1.93934 3.93934C1.65804 4.22064 1.5 4.60218 1.5 5V12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5H13C13.3978 13.5 13.7794 13.342 14.0607 13.0607C14.342 12.7794 14.5 12.3978 14.5 12V5C14.5 4.60218 14.342 4.22064 14.0607 3.93934C13.7794 3.65804 13.3978 3.5 13 3.5ZM13.5 12C13.5 12.1326 13.4473 12.2598 13.3536 12.3536C13.2598 12.4473 13.1326 12.5 13 12.5H3C2.86739 12.5 2.74021 12.4473 2.64645 12.3536C2.55268 12.2598 2.5 12.1326 2.5 12V5C2.5 4.86739 2.55268 4.74021 2.64645 4.64645C2.74021 4.55268 2.86739 4.5 3 4.5H5C5.08234 4.50005 5.16342 4.47977 5.23603 4.44096C5.30865 4.40214 5.37055 4.34599 5.41625 4.2775L6.2675 3H9.73188L10.5837 4.2775C10.6294 4.34599 10.6914 4.40214 10.764 4.44096C10.8366 4.47977 10.9177 4.50005 11 4.5H13C13.1326 4.5 13.2598 4.55268 13.3536 4.64645C13.4473 4.74021 13.5 4.86739 13.5 5V12ZM8 5.5C7.4561 5.5 6.92442 5.66128 6.47218 5.96346C6.01995 6.26563 5.66747 6.69512 5.45933 7.19762C5.25119 7.70012 5.19673 8.25305 5.30284 8.7865C5.40895 9.31995 5.67086 9.80995 6.05546 10.1945C6.44005 10.5791 6.93005 10.8411 7.4635 10.9472C7.99695 11.0533 8.54988 10.9988 9.05238 10.7907C9.55488 10.5825 9.98437 10.2301 10.2865 9.77782C10.5887 9.32558 10.75 8.7939 10.75 8.25C10.7492 7.52091 10.4592 6.82192 9.94363 6.30637C9.42808 5.79082 8.72909 5.50083 8 5.5ZM8 10C7.65388 10 7.31554 9.89736 7.02775 9.70507C6.73997 9.51278 6.51566 9.23947 6.38321 8.9197C6.25076 8.59993 6.2161 8.24806 6.28363 7.90859C6.35115 7.56913 6.51782 7.25731 6.76256 7.01256C7.00731 6.76782 7.31913 6.60115 7.65859 6.53363C7.99806 6.4661 8.34993 6.50076 8.6697 6.63321C8.98947 6.76566 9.26278 6.98997 9.45507 7.27775C9.64736 7.56554 9.75 7.90388 9.75 8.25C9.75 8.71413 9.56563 9.15925 9.23744 9.48744C8.90925 9.81563 8.46413 10 8 10Z"
                    fill="#748181"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-sm font-medium text-[#FF7A21]">
                Upload Logo
              </div>
              <div className="font-normal text-xs mt-0.5">
                Format - jpg & png
              </div>
            </div>
          </div>
          <div className="mb-4 flex gap-6">
            <div className="flex-auto">
              <label
                className="block text-[#748181] text-sm font-bold mb-2"
                htmlFor="name"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your firstname"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full text-[#131515] px-3 py-2 border text-xs rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex-auto">
              <label
                className="block text-[#748181] text-sm font-bold mb-2"
                htmlFor="name"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your lastname"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full text-[#131515] px-3 py-2 border text-xs rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex gap-6">
            <div className="flex-auto">
              <label
                className="block text-[#748181] text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-[#131515] px-3 py-2 text-xs border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex-auto">
              <label
                className="block text-[#748181] text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full text-[#131515] px-3 py-2 border text-xs rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex gap-6">
            <div className="flex-auto">
              <label
                className="block text-[#748181] text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <Select
                className="text-xs text-[#131515]"
                options={genderOptions}
                onChange={handleGenderChange}
                value={genderOptions.find(
                  (option) => option.value === formData.gender
                )}
              />
            </div>
            <div className="flex-auto">
              <label
                className="block text-[#748181] text-sm font-bold mb-2"
                htmlFor="faculty"
              >
                Faculty
              </label>
              <Select
                className="text-xs text-[#131515]"
                options={facultyOptions}
                onChange={handleFacultyChange}
                value={facultyOptions.find(
                  (option) => option.value === formData.faculty
                )}
              />
            </div>
            <div className="flex-auto">
              <label
                className="block text-[#748181] text-sm font-bold mb-2"
                htmlFor="course"
              >
                Course
              </label>
              <Select
                className="text-xs text-[#131515]"
                options={courseOptions}
                onChange={handleCourseChange}
                value={courseOptions.find(
                  (option) => option.value === formData.course
                )}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-[#748181] text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange}
              className="w-full text-xs text-[#131515] px-3 py-2 border rounded-lg h-14 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#ABD9E8] text-white text-base font-medium px-4 py-2 w-28 rounded-full focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
