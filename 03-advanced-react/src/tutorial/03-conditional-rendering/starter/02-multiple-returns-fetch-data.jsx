import { useEffect, useState } from "react";
const url = "https://api.github.com/users/gsipes00";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    // fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const geneData = await response.json();
        setUser(geneData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // setting up jsx
  if (loading) {
    return <h2>Fetching Data, Just a sec...</h2>;
  }
  if (isError) {
    return <h1>there was an error</h1>;
  }

  const { login, name, avatar_url, html_url, blog, location, bio } = user;
  return (
    <div>
      <h1 style={{ fontSize: "72px", color: "brown", marginBottom: "48px" }}>
        Fetch Data
      </h1>
      <a href={html_url}>
        <img
          style={{ height: "250px", borderRadius: "36px" }}
          src={avatar_url}
          alt=''
        />
      </a>
      <h1>{name}</h1>
      <p style={{ fontSize: "24px" }}>
        {bio} Works at {blog} out of {location}
      </p>
    </div>
  );
};
export default MultipleReturnsFetchData;
