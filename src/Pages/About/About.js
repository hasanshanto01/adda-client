import React, { useEffect, useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import AboutModal from './AboutModal';
import { toast } from 'react-hot-toast';

const About = () => {

    const [aboutData, setAboutData] = useState([]);
    const id = aboutData[0]?._id;
    // console.log(aboutData);

    const handleAboutDetail = event => {
        // event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;

        const aboutDetail = {
            id,
            name,
            email,
            university,
            address
        }
        // console.log(aboutDetail);

        fetch('http://localhost:5000/about', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(aboutDetail)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Successfully edited');
                }
            })

    };

    useEffect(() => {
        fetch('http://localhost:5000/about')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAboutData(data);
            })
    }, []);

    return (
        <div className='mt-5'>
            <div className='flex items-center'>
                <h2 className='text-3xl font-bold text-end text-primary w-3/5 mr-36'>About</h2>
                <div className='w-2/5 text-end'>
                    {/* The button to open modal */}
                    <label htmlFor="about-modal" className="btn btn-outline btn-primary mr-5">
                        <PencilSquareIcon className='h-8 w-8 text-neutral' />
                    </label>
                </div>
            </div>
            <div className='w-3/5 mx-auto my-14 p-10 text-xl'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {
                            aboutData.map(about => <tbody key={about?._id}>
                                {/* row 1 */}
                                <tr >
                                    <td>Name</td>
                                    <td>:</td>
                                    <td>{about?.name}</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td>{about?.email}</td>
                                </tr >
                                {/* row 3 */}
                                <tr >
                                    <td>University</td>
                                    <td>:</td>
                                    <td>{about?.university}</td>
                                </tr>
                                {/* row 4 */}
                                <tr >
                                    <td>Address</td>
                                    <td>:</td>
                                    <td>{about?.address}</td>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
            <AboutModal
                handleAboutDetail={handleAboutDetail}
            ></AboutModal>
        </div>
    );
};

export default About;