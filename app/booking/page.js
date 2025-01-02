"use client";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import ConfirmationModal from "../components/ConfirmationModal";

export default function Page() {
	const [date, setDate] = useState(null);
	const [selectedDate, setSelectedDate] = useState();
	const [timeSlot, setTimeSlot] = useState("");
	const [bookedSlots, setBookedSlots] = useState({});
	const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [persons, setPersons] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);

	const timeSlots = [
		"11:00 AM",
		"11:30 AM",
		"12:00 PM",
		"12:30 PM",
		"1:00 PM",
		"1:30 PM",
		"2:00 PM",
		"2:30 PM",
		"3:00 PM",
		"3:30 PM",
		"4:00 PM",
		"4:30 PM",
		"5:00 PM",
		"5:30 PM",
		"6:00 PM",
		"6:30 PM",
		"7:00 PM",
		"7:30 PM",
		"8:00 PM",
	];

  useEffect(() => {
		const savedBookedSlots = localStorage.getItem("bookedSlots");
		if (savedBookedSlots) {
			setBookedSlots(JSON.parse(savedBookedSlots));
		}
	}, []);

	const handleBooking = () => {
		const dateString = date.toDateString();
		setSelectedDate(dateString);
		setBookedSlots((prev) => {
			const updatedBookedSlots = {
				...prev,
				[dateString]: [...(prev[dateString] || []), timeSlot],
			};
			localStorage.setItem("bookedSlots", JSON.stringify(updatedBookedSlots));
			return updatedBookedSlots;
		});
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setTimeSlot("");
		setName("");
		setContact("");
		setPersons("");
		setIsModalOpen(false);
	};

	return (
		<div className="pl-4 lg:pl-16 mt-24 mb-32 w-full">
			<h1 className="text-4xl lg:text-6xl font-bold text-light-golden text-shadow-lg">
				Book a Table
			</h1>

			<div className="lg:w-72 mr-4 mt-4">
				<p className="ml-2 mt-2 text-lg font-semibold  text-gray-200">Select a date:</p>
				<Calendar
					onChange={(selectedDate) => setDate(selectedDate)}
					value={date}
					minDate={tomorrow}
					className="border-2 text-gray-200 backdrop-blur-sm py-2 px-3 rounded-xl"
				/>
			</div>

			{date && (
				<div className="mt-6 mr-4 lg:mr-20">
					<h2 className="text-2xl font-medium text-gray-200 text-shadow-lg">
						Complete Your Booking:
					</h2>

					<p className="ml-2 mt-2 text-gray-200">
						Selected Date: {date.toDateString()}
					</p>

					<div className="mt-4 ml-2">
						<label className="block text-gray-200">Name:</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full p-2 border border-gray-400 rounded-md mt-1"
							placeholder="Enter your name"
						/>
					</div>

					<div className="mt-4 ml-2">
						<label className="block text-gray-200">Contact:</label>
						<input
							type="text"
							value={contact}
							onChange={(e) => setContact(e.target.value)}
							className="w-full p-2 border border-gray-400 rounded-md mt-1"
							placeholder="Enter your contact number or email"
						/>
					</div>

					<div className="mt-4 ml-2">
						<label className="block text-gray-200">
							Number of Persons:
						</label>
						<input
							type="number"
							value={persons}
							onChange={(e) => setPersons(e.target.value)}
							className="w-full p-2 border border-gray-400 rounded-md mt-1"
							placeholder="Enter the number of persons"
							min="1"
						/>
					</div>

					<div className="mt-4 ml-2">
						<label className="block text-gray-200">
							Select a Time Slot:
						</label>
						<div className="grid grid-cols-4 gap-4 mt-4">
							{timeSlots.map((slot, index) => (
								<div
									key={index}
									onClick={() => setTimeSlot(slot)}
									className={`shadow flex flex-col items-center justify-center py-4 px-2 cursor-pointer text-center border rounded-md transition ${
										bookedSlots[
											date.toDateString()
										]?.includes(slot)
											? "bg-gray-300 cursor-not-allowed"
											: timeSlot === slot
											? "bg-light-golden text-white"
											: "bg-white hover:bg-gray-100"
									}`}
									style={{
										cursor: bookedSlots[
											date.toDateString()
										]?.includes(slot)
											? "not-allowed"
											: "pointer",
									}}
								>
									{slot}
									{bookedSlots[date.toDateString()]?.includes(
										slot
									) && (
										<span className="text-red-500 text-xs">
											(Booked)
										</span>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{date && timeSlot && name && contact && persons && (
        <div className="flex items-center justify-center"><button
					onClick={handleBooking}
					className="shadow-lg mt-6 px-4 py-2 bg-green-600 text-white rounded-lg"
				>
					Confirm Booking
				</button></div>
				
			)}

			{isModalOpen && (
				<ConfirmationModal
					persons={persons}
					name={name}
					date={selectedDate}
					time={timeSlot}
					contact={contact}
					onClick={handleOk}
				/>
			)}
		</div>
	);
}
