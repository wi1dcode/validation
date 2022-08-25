import { Link } from "react-router-dom"

const UserCard = ({ picture, name, email, slug }) => {
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://wallpaperaccess.com/full/233104.jpg"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src={
            !picture
              ? "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-18.jpg"
              : picture
          }
          alt={name}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray-500">{email}</p>
      </div>
      <div className="p-4 border-t mx-8 mt-2">
        <Link to={`/${slug}`}>
          <button className="w-1/2 block mx-auto rounded-full bg-stone-800 hover:shadow-lg font-semibold text-white px-6 py-2">
            More
          </button>
        </Link>
      </div>
    </div>
  )
}
export default UserCard
