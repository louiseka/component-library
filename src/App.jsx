import Badge from "./components/badges/Badge"

function App() {

  const colors = ["grey", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]

  const badgeElements = colors.map((color) => {
    return (
      <div>
        <Badge
          color={color}
          variant={"pill"}
        />
        <Badge
          color={color}
          variant={"square"}
        />
      </div>

    )
  })

  return (
    <div className="badge-components">
      {badgeElements}
    </div>

  )
}

export default App
