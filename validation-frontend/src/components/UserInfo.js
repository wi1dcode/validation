const UserInfo = ({ picture, name, email, city, password }) => {
  return (
    <div class="mx-5 min-h-screen grid place-content-center">
      <div class="bg-gradient-to-tl from-sky-900 via-zinc-900 to-neutral-900 rounded-2xl text-white p-8 text-center w-[33vw] h-60 mx-auto">
        <h1 class="text-3xl mb-3">{email}</h1>
        <p class="text-lg">Password: {password}</p>
      </div>
      <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 w-[80%] mx-auto">
        <img
          class="w-[50%] h-[50%] object-cover rounded-full mx-auto shadow-lg"
          src={
            !picture
              ? "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-18.jpg"
              : picture
          }
          alt="User avatar"
        />
        <p class="capitalize text-xl mt-4">{name}</p>
        <span class="flex items-center border rounded-full w-24 justify-center mx-auto mt-4 text-xl pt-1 pb-1">
          {city}
        </span>
      </div>
    </div>
  )
}

export default UserInfo
