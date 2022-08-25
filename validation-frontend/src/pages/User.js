import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserInfo from "../components/UserInfo"

const User = () => {
  const { slug } = useParams()
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const request = await fetch(`http://localhost:5000/users/${slug}`)
    const response = await request.json()
    setUser(response)
  }

  return (
    <UserInfo
      key={user.slug}
      name={user.name}
      email={user.email}
      picture={user.profile_picture}
      city={user.city}
      password={user.password}
    />
  )
}

export default User
