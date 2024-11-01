/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';

const JobCard = ({ job }) => {
    const convertDateFormat = (inputDate) => {
        const parts = inputDate.split('-');
        if (parts.length !== 3) {
            return "Invalid date format";
        }
        const day = parts[2];
        const month = parts[1];
        const year = parts[0];

        return `${day}-${month}-${year}`;
    };

    const isMobile = useIsMobile();

    return (
        <Link
            to={`/details/${job._id}`}

            className='text-white flex flex-col gap-4 shadow-md shadow-gray-800 border border-gray-700 md:px-4 px-3 w-full mx-auto my-2'
        >
            <div className='flex gap-5 relative'>
                <div className='flex justify-center items-center'>
                    <img src={job.companyLogo.url} className='w-[4rem]' alt="Company Logo" />
                </div>

                <div className='flex flex-col justify-between w-full md:w-3/4 lg:w-1/2 p-4 rounded-lg'>
                    {/* Job Title and Apply Button in the same row */}
                    <div className='flex justify-between md:gap-4 gap-2'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm  whitespace-nowrap'>{job.title}</p>
                            <p className='text-sm'>{job.companyName}</p>
                            <p className='text-sm'>{job.exp}</p>
                        </div>
                        {/* Apply button positioned here for all screens */}
                        <div className='absolute md:right-3 right-0 md:pt-2 top-3'>
                            <button className='blueCol font-semibold md:text-xs text-xs px-1 py-1'>Apply</button>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center md:hidden'>
                        <p className='text-sm text-white'>{job.description.slice(0, 20)}...</p>
                    </div>
                </div>

            </div>

            <div className='flex   md:gap-4  gap-3 lg:text-base  mt-3 md:text-sm text-xs '>
                <span className='whitespace-nowrap'>{convertDateFormat(job.createdAt.substr(0, 10))}</span>
                <span className='whitespace-nowrap'>{job.employmentType}</span>
                <span>{job.location}</span>
            </div>
        </Link >
    );
};

export default JobCard;