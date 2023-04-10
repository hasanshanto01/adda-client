import React from 'react';

const AboutModal = ({ handleAboutDetail }) => {
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="about-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="about-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">Edit About</h3>
                    <form onSubmit={handleAboutDetail} className='w-4/5 mx-auto p-3'>
                        <input name='name' type="text" placeholder="Enter Name" className="input input-bordered w-full mb-2" />
                        <input name='email' type="email" placeholder="Enter Email" className="input input-bordered w-full mb-2" />
                        <input name='university' type="text" placeholder="Enter University" className="input input-bordered w-full mb-2" />
                        <input name='address' type="text" placeholder="Enter Address" className="input input-bordered w-full mb-2" />
                        <input type="submit" value="Save" className='btn btn-outline btn-primary w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AboutModal;