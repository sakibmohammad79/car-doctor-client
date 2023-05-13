import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookinRow from "./BookinRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const Booking = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const navigate = useNavigate();

    useEffect(()=> {
      fetch(` https://cars-doctors-18420.web.app/booking?email=${user.email}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('car-access-token')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if(!data.error){
          setBookings(data)
        }
        else{
          navigate('/')
        }
      })
  },[])
  console.log(bookings);

    const handleDelete = (id) => {
        const procced = confirm('are you sure you went to delete');
        if(procced){
            fetch(` https://cars-doctors-18420.web.app/booking/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
                console.log(data);
                if(data.deletedCount> 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success...',
                        text: 'Successfully deleted!'
                      })
                }
            })
        }
           
    }
    const handleConfirm = (id) => {
        fetch(` https://cars-doctors-18420.web.app/booking/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirmed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.filter(booking => booking._id === id);
                updated.status = 'confirmed';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }
    
    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service</th>
        <th>Name</th>
        <th>Date</th>
        <th>Price</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <BookinRow
        key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        handleConfirm={handleConfirm}></BookinRow>)
      }
    </tbody>
    
  </table>
</div>
    );
};

export default Booking;