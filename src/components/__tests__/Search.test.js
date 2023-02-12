import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import Store from "../../store/Store"
import Body from "../Body"

test("search functionality working",()=>{
  const body=  render(<Body/>)
  console.log(body,"zxczcz");
})