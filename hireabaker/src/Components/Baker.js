import React, { useState, useEffect } from "react";
import axios from "axios";
import { USER_PER_PAGE } from "../Paginate/MyUser";
import Pagination from "../Paginate/Pagination";
import TheUsers from "../Paginate/TheUsers"

const url = `https://randomuser.me/api/?results=1000`;

function Baker() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(()=> {
    const FetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setLoading(false);
      setUsers(res.data.results);
      setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
    };
    FetchUsers();
  }, []);
  const handleClick = (num) => {
    setPage(num);
  }


  return (
    <div>
      <h1>REGISTERED BAKERS</h1>
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <>
          <TheUsers users={users} page={page} />
          <Pagination
            totalPages={totalPages}
            handleClick={handleClick}
            setPage={setPage}
            page={page}
          />
        </>
      )}
    </div>
  )
}
  

  



export default Baker
