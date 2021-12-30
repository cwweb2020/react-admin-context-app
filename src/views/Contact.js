import React from "react";
import useGetData from "../hooks/useGetData";

const Contact = () => {
  const photos = useGetData("comments");

  console.log(photos);

  return (
    <div style={{ minHeight: "80vh" }}>
      <h1 className="text-center my-5">Contact information</h1>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridColumnGap: '20px', gridRowGap: '20px', padding: '0 30px'}}>
        {photos.map((p) => (
          <div key={p.id}>
            {/* <img style={{width: '100%'}} src={p.thumbnailUrl} alt="" /> */}
            <p>{p.email}</p>
            <p>{p.body}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
