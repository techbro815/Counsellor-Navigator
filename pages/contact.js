import React from "react";
import Script from "next/script";
import Head from "next/head";

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>

            <div className="flex flex-col justify-start items-center w-full mt-8 pb-10">
                <div className="text-center flex flex-col items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-8 p-8 pb-10 bg-[#f8f9fa] shadow-inner drop-shadow-md rounded-md">
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-FHGVRT52L7"
                        strategy="afterInteractive"
                    />
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="text-lg mt-2">
                        Have any queries or feedback? Feel free to reach out to us.
                    </p>
                    <form
                        className="flex flex-col gap-4 mt-4 w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Form submitted successfully!");
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <textarea
                            placeholder="Message"
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <button
                            type="submit"
                            className="bg-blue-900 text-white p-2 rounded-md"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
