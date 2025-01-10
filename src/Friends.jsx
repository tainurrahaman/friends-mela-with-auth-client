import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Friends = () => {
  const loadedFriends = useLoaderData();
  const [friends, setFriends] = useState(loadedFriends);

  const handleFriendDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/friends/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "This friend has been deleted.",
                icon: "success",
              });
              const remainingFriends = friends.filter(
                (friend) => friend._id !== id
              );
              setFriends(remainingFriends);
            }
          });
      }
    });
  };

  return (
    <div className="w-10/12 mx-auto ">
      <button className="btn mb-5">
        <Link to="/">Home</Link>
      </button>
      <h2 className="font-bold text-3xl mb-5">
        {" "}
        Total Friends {friends.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-700 text-white text-lg">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>CreateAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {friends.map((friend) => (
              <tr key={friend._id}>
                <th>1</th>
                <td>{friend.name}</td>
                <td>{friend.email}</td>
                <td>{friend.createAt}</td>
                <td className="space-x-2 flex items-center">
                  <button
                    onClick={() => handleFriendDelete(friend._id)}
                    className="btn text-xl text-red-600"
                  >
                    <MdDeleteForever></MdDeleteForever>
                  </button>
                  <button className="btn">
                    <FaPen></FaPen>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Friends;
