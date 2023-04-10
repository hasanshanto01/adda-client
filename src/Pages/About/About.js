import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const About = () => {
    return (
        <div className='mt-5'>
            <div className='flex items-center'>
                <h2 className='text-3xl font-bold text-end text-primary w-3/5 mr-36'>About</h2>
                <div className='w-2/5 text-end'>
                    <button className='btn btn-outline btn-primary tooltip tooltip-bottom tooltip-primary mr-5' data-tip="Edit">
                        <PencilSquareIcon className='h-8 w-8 text-neutral' />
                    </button>
                </div>
            </div>
            <div className='w-3/5 mx-auto my-14 p-10 text-xl'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Name</td>
                                <td>:</td>
                                <td>Kamrul Hasan</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td>hasanshanto01@gmail.com</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>University</td>
                                <td>:</td>
                                <td>Mawlana Bhashani Science and Technology University
                                </td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td>Santosh, Tangail, Dhaka</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default About;