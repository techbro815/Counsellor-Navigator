import React, { useState } from "react";
import Head from "next/head";

import Dropdown from "../components/dropdown";

const ContactUs = () => {
    const [college1, setCollege1] = useState();
    const [college2, setCollege2] = useState();

    return (
        <>
            <Head>
                <title>Compare Colleges</title>
            </Head>

            <div className="flex flex-col justify-start items-center w-full mt-8 pb-10">
                <div className="text-center flex flex-col items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-8 p-8 pb-10 bg-[#f8f9fa] shadow-inner drop-shadow-md rounded-md">
                    <h1 className="text-3xl font-bold">Compare Colleges</h1>
                    <p className="text-lg mt-2">
                        Select two colleges to compare them.
                    </p>
                    <div className="flex flex-col gap-4 mt-4 w-full">
                        <div className="my-4 w-full">
                            <label className="block text-md font-semibold text-gray-700 mb-2">
                                Select 1st College
                            </label>
                            <Dropdown
                                options={listOfColleges.map((option) => ({
                                    value: option.Name, label: option.Name
                                }))}
                                onChange={(selectedOption) => setCollege1(selectedOption.value)}
                                className="w-full"
                            />
                        </div>
                        <div className="my-4 w-full">
                            <label className="block text-md font-semibold text-gray-700 mb-2">
                                Select 2nd College
                            </label>
                            <Dropdown
                                options={listOfColleges.map((option) => ({
                                    value: option.Name, label: option.Name
                                }))}
                                onChange={(selectedOption) => setCollege2(selectedOption.value)}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                {/* Compare both colleges all features as mentioned in the list in a table format */}
                <div className="flex flex-col items-center w-full mt-8 p-8 pb-10 rounded-md">
                    <h1 className="text-3xl font-bold">Comparison</h1>
                    {college1 && college2 && (
                        <table className="w-full mt-4">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2">Feature</th>
                                    <th className="border border-gray-300 p-2">{college1}</th>
                                    <th className="border border-gray-300 p-2">{college2}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(listOfColleges[0]).map((key) => (
                                    <tr key={key}>
                                        <td className="border border-gray-300 p-2">{key}</td>
                                        <td className="border border-gray-300 p-2">{listOfColleges.find((college) => college.Name === college1)[key]}</td>
                                        <td className="border border-gray-300 p-2">{listOfColleges.find((college) => college.Name === college2)[key]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

        </>
    );
};

const listOfColleges = [
    {
        Name: "College of Engineering, Pune",
        Location: "Shivajinagar, Pune",
        "Established Year": "1854",
        Website: "https://www.coep.org.in/",
        NIRF: "151 - 200",
        NAAC: "A+",
        "Average Package": "11.68 Lakhs"
    },
    {
        Name: "Pune Institute of Computer Technology",
        Location: "Dhankawadi, Pune",
        "Established Year": "1983",
        Website: "https://www.pict.edu/",
        NIRF: "201 - 250",
        NAAC: "A+",
        "Average Package": "12.34 Lakhs"
    },
    {
        Name: "Vishwakarma Institute of Technology",
        Location: "Kondhwa, Pune",
        "Established Year": "1983",
        Website: "https://www.vit.edu/",
        NIRF: "151 - 200",
        NAAC: "A++",
        "Average Package": "8.74 Lakhs"
    },
    {
        Name: "Veermata Jijabai Technological Institute",
        Location: "Matunga, Mumbai",
        "Established Year": "1887",
        Website: "https://www.vjti.ac.in/",
        NIRF: "101 - 150",
        NAAC: "A",
        "Average Package": "18 Lakhs"
    },
]

export default ContactUs;
