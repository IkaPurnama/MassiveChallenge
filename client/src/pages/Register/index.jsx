import Layout from "./Layout"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect } from "react"
import { Helmet  } from "react-helmet"

const Register = () => {
  const history = useHistory()

  useEffect(() => {
    //jika sudah login, maka
    if(sessionStorage.getItem('token') !== null){
      history.push(`/${sessionStorage.getItem('role')}`)
    }
  }, [history])

  return (
    <div>
      <Helmet>
        <title>
          Daftar Sekarang
        </title>
      </Helmet>
      <Layout/>
    </div>
  )
}

export default Register