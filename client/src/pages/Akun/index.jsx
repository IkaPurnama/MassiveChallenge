import React from "react"
import { useClient } from "../../components/client"
import Layout from "./Layout"

const Akun = () => {
  const client = useClient()
  return (
    <div>
      <Layout user={client.account}/>
    </div>
  )
}

export default Akun