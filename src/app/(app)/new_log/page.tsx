'use client'
import { useState } from "react";

export default function NewLog() {
    const [diveData, setDiveData] = useState({
        diveNo: '',
        date: '',
        location: '',
        diveSiteName: '',
        airIn: '',
        weight: '',
        suit: '',
        airOut: '',
        diveTime: '',
        timeIn: '',
        safetyStop: '',
        timeOut: '',
        eanx: '',
        visibility: '',
        maxDepth: '',
        bottomTime: '',
        airTemp: '',
        waterTemp: '',
        conditions: {
            sunny: false,
            partSun: false,
            cloudy: false,
            rain: false,
            boat: false,
            shore: false,
            drift: false,
            night: false,
            wreck: false,
            calm: false,
            wavy: false,
            surf: false,
            surge: false,
        },
        comments: '',
        stamp: '',
        verification: '',
    });

    const handleChange = (e:any) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setDiveData((prevData) => ({
                ...prevData,
                conditions: {
                    ...prevData.conditions,
                    [name]: checked,
                },
            }));
        } else {
            setDiveData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(diveData);
        // Add your form submission logic here
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Log New Dive</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Dive Log</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="date" required name="date" placeholder="Date" value={diveData.date} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" required name="location" placeholder="Location" value={diveData.location} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" required name="diveSiteName" placeholder="Dive Site Name" value={diveData.diveSiteName} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                    </div>
                </div>

                <div className="p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="airIn" placeholder="Air In" value={diveData.airIn} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="weight" placeholder="Weight" value={diveData.weight} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="suit" placeholder="Suit" value={diveData.suit} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="airOut" placeholder="Air Out" value={diveData.airOut} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="diveTime" placeholder="Dive Time" value={diveData.diveTime} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="timeIn" placeholder="Time In" value={diveData.timeIn} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="safetyStop" placeholder="Safety Stop" value={diveData.safetyStop} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="timeOut" placeholder="Time Out" value={diveData.timeOut} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="eanx" placeholder="O2% EANx" value={diveData.eanx} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="visibility" placeholder="Visibility" value={diveData.visibility} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="maxDepth" placeholder="Max Depth" value={diveData.maxDepth} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="bottomTime" placeholder="Bottom Time" value={diveData.bottomTime} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="airTemp" placeholder="Air Temp" value={diveData.airTemp} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="waterTemp" placeholder="Water Temp" value={diveData.waterTemp} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                    </div>
                </div>

                <div className="p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">About My Dive</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <label className="flex items-center">
                            <input type="checkbox" name="sunny" checked={diveData.conditions.sunny} onChange={handleChange} className="mr-2" />
                            Sunny
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="partSun" checked={diveData.conditions.partSun} onChange={handleChange} className="mr-2" />
                            Part Sun
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="cloudy" checked={diveData.conditions.cloudy} onChange={handleChange} className="mr-2" />
                            Cloudy
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="rain" checked={diveData.conditions.rain} onChange={handleChange} className="mr-2" />
                            Rain
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="boat" checked={diveData.conditions.boat} onChange={handleChange} className="mr-2" />
                            Boat
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="shore" checked={diveData.conditions.shore} onChange={handleChange} className="mr-2" />
                            Shore
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="drift" checked={diveData.conditions.drift} onChange={handleChange} className="mr-2" />
                            Drift
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="night" checked={diveData.conditions.night} onChange={handleChange} className="mr-2" />
                            Night
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="wreck" checked={diveData.conditions.wreck} onChange={handleChange} className="mr-2" />
                            Wreck
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="calm" checked={diveData.conditions.calm} onChange={handleChange} className="mr-2" />
                            Calm
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="wavy" checked={diveData.conditions.wavy} onChange={handleChange} className="mr-2" />
                            Wavy
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="surf" checked={diveData.conditions.surf} onChange={handleChange} className="mr-2" />
                            Surf
                        </label>
                        <label className="flex items-center">
                            <input type="checkbox" name="surge" checked={diveData.conditions.surge} onChange={handleChange} className="mr-2" />
                            Surge
                        </label>
                    </div>
                    <textarea
                        name="comments"
                        placeholder="Comments about the dive"
                        value={diveData.comments}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-4"
                    ></textarea>
                </div>

                {/* <div className="p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Additional Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="stamp" placeholder="Stamp" value={diveData.stamp} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="verification" placeholder="Verification" value={diveData.verification} onChange={handleChange} className="p-2 border border-gray-300 rounded" />
                    </div>
                </div> */}

                <button type="submit" className="w-full p-2 bg-blue-600 text-white font-bold rounded">Log New Dive</button>
            </form>
        </div>
    );
};