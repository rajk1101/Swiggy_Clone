import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should load Contact us Component",()=>{
    render(<Contact></Contact>)

    const heading= screen.getByRole("heading")

    //assertion
    expect(heading).toBeInTheDocument();
})

test("Should load buttom inside contact-us Component",()=>{
    render(<Contact></Contact>)

    const button= screen.getByRole("Random")

    //assertion
    expect(button).toBeInTheDocument();
})