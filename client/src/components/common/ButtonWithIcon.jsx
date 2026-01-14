
function ButtonWithIcon({title,icon, color}) {
  return (
    <div>
      <button className=" {color} flex justify-center items-center w-45 py-2 text-center border-2  border-white/50 text-l ">{title}
      <span>{icon}</span>
      </button>
      
    </div>
  )
}

export default ButtonWithIcon
