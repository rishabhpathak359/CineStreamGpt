import React from 'react'

export const useValidation = (email,password) => {
  const emailvalidation=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passvalidation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  if (!emailvalidation) return "Invalid Email-address"
  if (!passvalidation) return "Invalid password"
  return null;
}
