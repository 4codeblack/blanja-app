import React, { createContext, useState } from "react";

export const EditProfileContext = createContext();
const EditProfileProvider = (props) => {
  const [editProfile, setEditProfile] = useState(true);

  return (
    <EditProfileContext.Provider value={{ editProfile, setEditProfile }}>
      {props.children}
    </EditProfileContext.Provider>
  );
};

export default EditProfileProvider;
