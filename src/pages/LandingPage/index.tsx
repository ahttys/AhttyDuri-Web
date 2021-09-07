import React from "react";

const LandingPage = () => {
  let authorizationCode = new URL(window.location.href).searchParams.get(
    "code"
  );
  console.log(authorizationCode);

  return <div>Landing</div>;
};

export default LandingPage;
