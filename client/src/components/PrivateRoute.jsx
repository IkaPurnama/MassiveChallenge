import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useClient } from "./client";

export const PrivateRoute = ({...props}) => {
  const client = useClient()
  const [isAuth, setIsAuth] = useState(null)

  useEffect(() =>{
    const fetch = async () => {
      const authenticated = await client.authenticate()

      //jika hasilnya undefined
      if(authenticated === undefined){
        setIsAuth(false)
      }else{ //jika sudah login
        setIsAuth(true)
      }
    }

    fetch()
  }, [])

  if(isAuth === null) return (<>Loading...</>)

  if(isAuth === false) return (<Redirect to="/" />)

  return (<Route {...props} />)
}