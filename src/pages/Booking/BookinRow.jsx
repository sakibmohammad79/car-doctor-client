const BookinRow = ({ booking, handleDelete, handleConfirm}) => {
  const { _id, img, date, customerName, service, price } = booking;
  return (
    <tr>
      <th>
        <label>
          <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-20 h-20">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {customerName}
        <br />
      </td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {
            booking.status === 'confirmed' ? 
            <button className="font-bold text-secondary">Confirmed</button> :
            <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default BookinRow;
