import Counter from "./Counter"
import Logo from "./Logo"

const Header = ({ stats }) => {
  return (
    <header>
      <Logo />
      <Counter stats={stats} />
    </header>
  )
}

export default Header
