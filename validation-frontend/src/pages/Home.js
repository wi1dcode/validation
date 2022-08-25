import { useEffect, useState } from "react"
import UserCard from "../components/UserCard"

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const request = await fetch("http://localhost:5000/users")
    const response = await request.json()
    setUsers(response)
  }

  return (
    <>
      {users.map((users) => {
        return (
          <UserCard
            key={users.slug}
            name={users.name}
            email={users.email}
            picture={
              !users.profile_picture
                ? "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-18.jpg"
                : users.profile_picture
            }
          />
        )
      })}
    </>
  )
}

export default Home
