import "./badges.css"

export default function Badge({ color, variant }) {



    return (
        <p className={`${variant} ${color}`}>Badge</p>
    )

}