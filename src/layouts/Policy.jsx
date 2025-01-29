import React from 'react'
import CloseIcon from "../assets/svg/closeIcon.svg"

const Policy = ({ handleClose }) => {
  return (
    <div className='bg-[#fff] w-full lg:w-[611px] h-[580px] overflow-y-scroll mt-[20px] rounded-lg flex flex-col'>
        <div className='flex items-center justify-between p-5'>
            <p className='font-bold text-xl font-neue text-[#000]'>Privacy Policy</p>
            <button className="flex justify-center items-center" onClick={handleClose}>
                <img src={CloseIcon} alt='close' />
            </button>
        </div>

        <div className='flex flex-col gap-5 px-5'>
            <div className='flex flex-col gap-2'>
                <p className='font-neue text-[#000]'>
                    <span className='font-bold'>Effective Date:</span> January 29, 2025
                </p>
                <p className='font-neue text-[#000]'>
                    <span className='font-bold'>Last Updated:</span> January 29, 2025
                </p>  
            </div>
            <p className='font-neue text-[#000]'>
                Welcome to <span className='font-bold'>Aftermath Investment</span>  (<a className='underline text-[#00f]'>https://aftermathinvestments.com</a>). 
                Your privacy is important to us, and we are committed to protecting any personal 
                information you provide while using our services. This Privacy Policy explains how we collect,
                 use, disclose, and safeguard your information.
            </p>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>1. Information We Collect</p>
                <p className='font-neue text-[#000]'>We may collect the following types of information:</p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>1.1 Personal Information</p>
                <p className='font-neue text-[#000]'>When you use our Website or engage with our services, we may collect:</p>
                <ul className='pl-7 font-neue list-disc'>
                    <li>Your name, email address, phone number, and any other contact details you provide.</li>
                    <li>Payment or financial information when processing transactions.</li>
                    <li>Any other information you submit through forms or inquiries.</li>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>1.2 Non-Personal Information</p>
                <p className='font-neue text-[#000]'>We may automatically collect certain non-personal information when you visit our Website, such as:</p>
                <ul className='pl-7 font-neue list-disc'>
                    <li>IP address and browser type.</li>
                    <li>Device information and operating system.</li>
                    <li>Website usage data, including pages visited and time spent on the Website.</li>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>1.3 Cookies and Tracking Technologies</p>
                <p className='font-neue text-[#000]'>
                    We may use cookies, web beacons, and similar tracking technologies to 
                    enhance your browsing experience. You can modify your browser settings to 
                    disable cookies if you prefer.
                </p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>2. How We Use Your Information</p>
                <p className='font-neue text-[#000]'>
                    We use your information to:
                </p>
                <ul className='pl-7 font-neue list-disc'>
                    <li>Provide, operate, and maintain the Website and our services</li>
                    <li>Respond to inquiries and customer support requests.</li>
                    <li>Process payments and transactions.</li>
                    <li>Improve user experience and Website functionality.</li>
                    <li>Comply with legal obligations and prevent fraudulent activities.</li>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>3. How We Share Your Information</p>
                <p className='font-neue text-[#000]'>
                    We do not sell, trade, or rent your personal information. 
                    However, we may share your information in the following circumstances:
                </p>
                <ul className='pl-7 font-neue list-disc'>
                    <li>
                        <span className='font-semibold'>Service Providers:</span> 
                        With third-party vendors who assist us in operating the Website, 
                        processing payments, or providing other essential services.
                    </li>
                    <li>
                        <span className='font-semibold'>Legal Compliance:</span> 
                        If required by law, we may disclose your information to comply 
                        with legal processes or government requests
                    </li>
                    <li>
                        <span className='font-semibold'>Business Transfers:</span> 
                        In the event of a merger, acquisition, or sale of company assets, 
                        your data may be transferred to a successor entity.
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>4. Data Security</p>
                <p className='font-neue text-[#000]'>
                    We take reasonable steps to protect your personal information from unauthorized access, 
                    misuse, or alteration. However, no online transmission is 100% secure, and we cannot 
                    guarantee absolute security.
                </p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>5. Your Rights and Choices</p>
                <ul className='pl-7 font-neue list-disc'>
                    <li>
                        <span className='font-semibold'>Access & Correction: </span> 
                        You may request access to or correction of your personal information.
                    </li>
                    <li>
                        <span className='font-semibold'>Opt-Out:</span> 
                        You can opt out of marketing emails or communications at any time
                    </li>
                    <li>
                        <span className='font-semibold'>Delete Information:</span> 
                        You may request the deletion of your data, subject to legal and operational requirements.
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>6. Third-Party Links</p>
                <p className='font-neue text-[#000]'>
                    Our Website may contain links to third-party websites. We are not responsible for the 
                    privacy practices of these websites, and we encourage you to review their privacy policies.
                </p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>7. Updates to This Policy</p>
                <p className='font-neue text-[#000]'>
                    We may update this Privacy Policy periodically. Any changes will be posted on this 
                    page with the revised "Effective Date."
                </p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-semibold font-neue text-base'>8. Contact Us</p>
                <p className='font-neue text-[#000]'>
                    If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className='font-neue text-[#000]'>
                    <span className='font-semibold'>Email: </span> <a className='text-[#00f] underline'>info@aftermathinvestments.com </a>
                </p>
                <p className='font-neue text-[#000]'>
                    <span className='font-semibold'>Website: </span> <a className='text-[#00f] underline'>https://aftermathinvestments.com </a>
                </p>
            </div>

            <p className='font-neue text-[#000] mb-5'>
                By using this Website, you agree to the terms of this Privacy Policy. 
                If you do not agree, please discontinue use of our services.
            </p>

        </div>


        
    </div>
  )
}

export default Policy