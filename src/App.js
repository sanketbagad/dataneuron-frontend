import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import { getUsers, addUser } from "./apis/userAPIs";
import ResizablePanel from "./Components/ResizablePanel";
import UserCredentials from "./Components/UserCredentials";
import ResidentalInfo from "./Components/ResidentalInfo";

function App() {
  const [data, setData] = useState([]);
  const [flexDirection, setFlexDirection] = useState("row");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleAddUser(data); // Send form data to handleAddUser function
  };

  const handleAddUser = (userData) => {
    addUser(userData)
      .then((response) => {
        setData([...data, response.data]);
        reset();
        toast.success("User added successfully");
      })
      .catch((error) => {
        toast.error("Error adding user");
      });
  };

  const handleResize = (event, direction, refToElement, delta) => {
    // You can handle the resize event here
    // For example, you can determine the new flex direction based on dimensions
    const { width, height } = refToElement.getBoundingClientRect();
    if (width > height) {
      setFlexDirection("row");
    } else {
      setFlexDirection("column");
    }
  };

  useEffect(() => {
    getUsers()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        toast.error("Error fetching users");
      });
  }, []);


  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Fill This Crazy Form😜</h2>
        <form
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4"
          onSubmit={handleSubmit(onSubmit)} 
        >
          <ResizablePanel onResize={handleResize}>
            <UserCredentials register={register} errors={errors} flexDirection={flexDirection} />
          </ResizablePanel>
          <ResizablePanel onResize={handleResize}>
            <ResidentalInfo register={register} errors={errors}  flexDirection={flexDirection} />
          </ResizablePanel>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-40"
          >
            Add User
          </button>
        </form>
      </div>
      {data && data.length > 0 && (
        <ResizablePanel onResize={handleResize}>
          <Table data={data} setData={setData} />
        </ResizablePanel>
      )}
    </>
  );
}

export default App;
