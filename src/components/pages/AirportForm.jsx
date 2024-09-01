// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getAirport, createAirport, updateAirport } from '../../services/airportService';
 
// function AirportForm() {
//     const { id } = useParams();
 
//     const navigate = useNavigate();
 
//     const [airport, setAirport] = useState({
//         airportNo: '',
//         carrierName: '',
//         airportModel: '',
//         seatCapacity: 0
//     });
 
//     useEffect(() => {
//         if (id) {
//             const fetchData = async () => {
//                 const result = await getAirport(id);
//                 setAirport(result);
//             };
 
//             fetchData();
//         }
//     }, [id]);
 
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log("handleChange: ", name, value);
//         setAirport({ ...airport, [name]: value });
//     };
 
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (id) {
//                 await updateAirport(airport);
//             } else {
//                 await createAirport(airport);
//             }
//             navigate('/airports');
//         } catch (error) {
//             console.error('Error submitting airport:', error);
//             // Handle error (e.g., show error message to user)
//         }
//     };
 
//     return (
//         <div className="container mt-4">
//             <h2>{id ? 'Edit Airport' : 'Add Airport'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label className="form-label">Airport No:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="airportNo"
//                         value={airport.airportNo}
//                         onChange={handleChange}
//                         disabled={!!id}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Carrier Name:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="carrierName"
//                         value={airport.carrierName}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Airport Model:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="airportModel"
//                         value={airport.airportModel}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Seat Capacity:</label>
//                     <in=put
//                         type="number"
//                         className="form-control"
//                         name"seatCapacity"
//                         value={airport.seatCapacity}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     {id ? 'Update' : 'Create'}
//                 </button>
//             </form>
//         </div>
//     );
// }
 
// export default AirportForm;
 