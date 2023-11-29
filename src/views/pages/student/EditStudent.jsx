import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import { users } from '../../../models/userDb';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useStudent } from '../../../context/StudentContext';
import Webcam from 'react-webcam';
import { useCallback, useRef } from 'react';

function EditStudent() {
  const { updateStudent, students } = useStudent();

  const { id } = useParams();
  const [userAccount, setUserAccount] = useState(
    students.filter((u) => u.id === parseInt(id))[0]
  );
  const navigate = useNavigate();

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
  const courseOptions = [
    { value: "Systems", label: "Systems" },
    { value: "Computer", label: "Computer" },
    { value: "Economics", label: "Economics" },
    { value: "Law", label: "Law" },
    { value: "Biology", label: "Biology" },
  ];


  const facultyOptions = [
    { value: "Engineering", label: "Engineering" },
    { value: "Science", label: "Science" },
    { value: "Arts", label: "Arts" },
    { value: "Law", label: "Law" },
    { value: "Education", label: "Education" },
  ];
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    } else {
      console.error('webcamRef is null');
    }
  }, [webcamRef, setImgSrc]);

  const retake = () => {
    setImgSrc(null);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    gender: Yup.string().required('Gender is required'),
    faculty: Yup.string().required('Faculty is required'),
    course: Yup.string().required('Course is required'),
    location: Yup.string().required('Location is required'),
  });
//   console.log('user account', userAccount);
  const formik = useFormik({
    initialValues: {
      id: userAccount?.id || '',
      firstName: userAccount?.firstName || '',
      lastName: userAccount?.lastName || '',
      email: userAccount?.email || '',
      phoneNumber: userAccount?.phoneNumber || '',
      gender: userAccount?.gender || '',
      course: userAccount.course || '',
      faculty: userAccount.faculty || '',
      location: userAccount?.location || '',
    },
    validationSchema,
    onSubmit: (values) => {
     updateStudent(values, values.image);
      setImgSrc(null);
      navigate('/');
    },
  });

  const handleSelectChange = (fieldName, selectedOption) => {
    formik.setFieldValue(fieldName, selectedOption.value);
  };

  useEffect(() => {
    const userData = users.filter((u) => u.id === parseInt(id));
    if (userData) {
      setUserAccount(userData);
    } else {
      toast.error('Error Invalid Student ID');
      navigate('/');
    }
  }, [id]);

  return (
    <>
      {!userAccount ? (
        <div>Please wait page loading.......</div>
      ) : (
        <div className=''>
          <div className='mx-auto items-center rounded-2xl p-6 bg-[white] pt-10 w-full lg:w-[730px] border-2 border-[#ECEEEE]'>
            <h2 className='text-base text-[#131515] text-center font-medium mb-6 md:mb-2'>
              Basic Information
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex gap-4 items-center mb-8'>
                <div className=''>
                  <div className=' ' required>
                    {imgSrc ? (
                      <img className=' ' src={imgSrc} alt='webcam' />
                    ) : (
                      <Webcam
                        className='h-24 w-24'
                        ref={webcamRef}
                        screenshotFormat='image/png'
                      />
                    )}
                  </div>
                </div>
                <div className=' bg-[#36A1C5] border rounded-full w-20 p-2'>
                  {imgSrc ? (
                    <button onClick={retake}>Retake</button>
                  ) : (
                    <button onClick={capture}>Capture</button>
                  )}
 </div>
              </div>
              <div className='mb-4 md:flex gap-6'>
                <div className='flex-auto'>
                  <label
                    className='block text-[#748181] text-sm font-bold mb-2'
                    htmlFor='name'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Enter your firstname'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className='w-full text-[#131515] px-3 py-2 border text-xs rounded-lg focus:outline-none focus:border-blue-500'
                    required
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className='text-red-500 text-xs mt-1'>
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>
                <div className='flex-auto'>
                  <label
                    className='block text-[#748181] text-sm font-bold mb-2'
                    htmlFor='name'
                  >
   Last Name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Enter your lastname'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className='w-full text-[#131515] px-3 py-2 border text-xs rounded-lg focus:outline-none focus:border-blue-500'
                    required
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className='text-red-500 text-xs mt-1'>
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>
              </div>
              <div className='mb-4 flex gap-6'>
                <div className='flex-auto'>
                  <label
                    className='block text-[#748181] text-sm font-bold mb-2'
                    htmlFor='email'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className='w-full text-[#131515] px-3 py-2 text-xs border rounded-lg focus:outline-none focus:border-blue-500'
                    required
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='text-red-500 text-xs mt-1'>
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className='flex-auto'>
                  <label
                    className='block text-[#748181] text-sm font-bold mb-2'
                    htmlFor='phoneNumber'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    placeholder='Enter your number'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    className='w-full text-[#131515] px-3 py-2 border text-xs rounded-lg focus:outline-none focus:border-blue-500'
                    required
                  />
 {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div className='text-red-500 text-xs mt-1'>
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                </div>
              </div>
              <div className='mb-4 flex gap-6'>
                <div className='flex-auto'>
                  <label
                    className='block text-[#748181] text-sm font-bold mb-2'
                    htmlFor='gender'
                  >
                    Gender
                  </label>
                  <Select
                    className='text-xs text-[#131515]'
                    options={genderOptions}
                    onChange={(selectedOption) =>
                      handleSelectChange('gender', selectedOption)
                    }
                    value={genderOptions.find(
                      (option) => option.value === formik.values.gender
                    )}
                  />
                  {formik.touched.gender && formik.errors.gender && (
                    <div className='text-red-500 text-xs mt-1'>
                      {formik.errors.gender}
                    </div>
                  )}
                </div>
                <div className='flex-auto'>
                  <label
                    className='block text-[#748181] text-sm font-bold mb-2'
                    htmlFor='faculty'
                  >
                    Faculty
                  </label>
                  <Select
                    className='text-xs text-[#131515]'
                    options={facultyOptions}
                    onChange={(selectedOption) =>
                      handleSelectChange('faculty', selectedOption)
                    }
                    value={facultyOptions.find(
                      (option) => option.label === formik.values.faculty
                    )}
                  />
                  {formik.touched.faculty && formik.errors.faculty && (
                    <div className='text-red-500 text-xs mt-1'>
                      {formik.errors.faculty}
                    </div>
                  )}
                </div>
                <div className='flex-auto'>
                  <label
                    className='block text-[#748181] text-sm font-bold mb-2'
                    htmlFor='course'
                  >
                    Course
                  </label>
                  <Select
                    className='text-xs text-[#131515]'
                    options={courseOptions}
                    onChange={(selectedOption) =>
                        handleSelectChange('course', selectedOption)
                      }
                      value={courseOptions.find(
                        (option) => option.label === formik.values.course
                      )}
                    />
                    {formik.touched.course && formik.errors.course && (
                      <div className='text-red-500 text-xs mt-1'>
                        {formik.errors.course}
                      </div>
                    )}
                  </div>
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-[#748181] text-sm font-bold mb-2'
                    htmlFor='location'
                  >
                    Location
                  </label>
                  <input
                    type='text'
                    id='location'
                    name='location'
                    placeholder='Enter your location'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location}
                    className='w-full text-xs text-[#131515] px-3 py-2 border rounded-lg h-14 focus:outline-none focus:border-blue-500'
                    required
                  />
 {formik.touched.location && formik.errors.location && (
                  <div className='text-red-500 text-xs mt-1'>
                    {formik.errors.location}
                  </div>
                )}
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='bg-[#36A1C5] text-white text-base font-medium px-4 py-2 rounded-full focus:outline-none'
                >
                  Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditStudent;  