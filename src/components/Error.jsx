import React, {useEffect} from "react";

export default function Error() {
  useEffect(() => {
    document.title = "404 PAGE NOT FOUND"
  }, [])
  
  return (
    <>
      <h1
        style={{
          width: "100vw",
          textAlign: "center",
          padding: "40px",
          color: "white",
        }}
      >
        404 PAGE NOT FOUND
      </h1>
      <p style={{ width: "100vw", textAlign: "center", color: "white" }}>
        Wrong page 😶
      </p>
    </>
  );
}
