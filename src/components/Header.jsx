import IconMoon from "./icons/IconMoon"
import IconSun from "./icons/IconSun"

const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1
          className="uppercase text-white px-4 text-3xl font-semibold tracking-[0.5em]"
        >
          Todo
        </h1>
        <button>
          {/* <img src={Moon} alt={`${Moon ? "moon icon" : "sun icon"}`} /> */}
          <IconSun />
        </button>
      </div>
    </header>
  )
}

export default Header