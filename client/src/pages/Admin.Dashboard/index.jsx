import { useClient } from "../../components/client"
import Layout from "./Layout"

const AdminDashboard = () => {
  const client = useClient()
  return (
    <div>
      <Layout user={client.account}/>
    </div>
  )
}

export default AdminDashboard