import React from "react";
import { router } from "expo-router";

function UserBookedCars() {
  if (kaza) {
    return router.replace("/login");
  }

  return <div></div>;
}

export default UserBookedCars;
