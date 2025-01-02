const ConfirmationModal = ({persons, name, date, time, contact, onClick}) => {
	return (
		<div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-6  mx-8 rounded-lg shadow-lg">
				<h2 className="text-xl mb-4">Table Booked!</h2>
				<p>
					A table for <strong>{persons}</strong> person is booked under name of <strong>{name}</strong> on {date} {time} <br/>
                    <strong>Contact:</strong> {contact}
				</p>
				<div className="text-center mt-4">
					<button
						onClick={onClick}
						className="mr-4 py-2 px-4 bg-green-500 text-white rounded"
					>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
