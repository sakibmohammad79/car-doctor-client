import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const CheckOut = () => {
  const services = useLoaderData();
  const { _id, price, title, img} = services;
  const { user } = useContext(AuthContext);

    const handleConfirm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            date,
            email,
            price: price,
            service: title,
            service_id: _id,
            img
        }
        fetch(' https://cars-doctors-18420.web.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully...',
                    text: 'Booking Is Confirm!',
                  })
            }
        })
    }

  return (
    <form onSubmit={handleConfirm}>
      <div className="card-body">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              defaultValue={user?.name}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Duo Amount</span>
            </label>
            <input
              type="text"
              placeholder="Amount"
              name="amount"
              defaultValue={price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Confirm Book" />
        </div>
      </div>
    </form>
  );
};

export default CheckOut;
