import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  // useEffect
  useEffect(() => {
    // setup fetch data function
    const fetchData = async () => {
      try {
        const fetchData = await fetch(url);
        const data = await fetchData.json();
        setUsers(data);
      } catch {
        console.log(error);
      }
    };
    // call fetch function
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "64px", fontSize: "64px" }}>Github Users</h1>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;
          return (
            <div key={id}>
              <h1>{login}</h1>
              <img
                style={{ height: "100px", borderRadius: "16px" }}
                src={avatar_url}
              />
              <h4>
                <a href={html_url} target='_blank'>
                  Github
                </a>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FetchData;
