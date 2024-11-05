export default function Badge({ color, variant }) {



    return (
        <p className={`${variant} ${color}`}>{color}</p>
    )

}