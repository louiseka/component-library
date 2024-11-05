import { FaExclamationTriangle, FaInfoCircle, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

import Badge from "./components/badges/Badge"
import Banner from "./components/banners/Banner"

function App() {

  const colors = ["grey", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]



  const badgeElements = colors.map((color) => {
    return (
      <div>
        <Badge color={color}
          variant={"pill"}>{color}</Badge>


        <Badge color={color}
          variant={"square"}>
          {color}

        </Badge>


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



// //Badge Component
// //Choose a color and shape. Color goes into color and shape into variant.




//Banner Components 

/* <div>
<Banner
  status={"success"}>
  <h3> <FaCheckCircle className={"icon"} />Congratulations</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
</Banner>

<Banner
  status={"warning"}>
  <h3> <FaExclamationTriangle className={"icon"} /> Warning </h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
</Banner>

<Banner
  status={"error"}>
  <h3> <FaTimesCircle className={"icon"} /> There is a problem with your application</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
</Banner>

<Banner
  status={"neutral"}>
  <h3> <FaInfoCircle className={"icon"} /> Update available</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
</Banner>
</div> */