import jsPDF from "jspdf";

const PDFGenerate = (confirmationID, name, contact, persons, dateString, timeSlot, table) => {
	const doc = new jsPDF();
	doc.setFont("Helvetica", "normal");

	// Title
	doc.setFontSize(18);
	doc.text("Table Booking Confirmation", 20, 20);

	// Booking Details
    doc.setFontSize(12);
	doc.text(`Confirmation ID: ${confirmationID}`, 20, 40); 
	doc.text(`Name: ${name}`, 20, 50);
	doc.text(`Contact: ${contact}`, 20, 60); 
	doc.text(`Number of Persons: ${persons}`, 20, 70);
	doc.text(`Date: ${dateString}`, 20, 80); 
	doc.text(`Time: ${timeSlot}`, 20, 90); 
	doc.text(`Table: ${table}`, 20, 100); 

	// Footer
	doc.setFontSize(10);
	doc.text("Thank you for booking with us!", 20, 110);

	// Save the PDF
	doc.save(`Booking_Confirmation_${name}_${dateString}.pdf`);
};

export default PDFGenerate;
