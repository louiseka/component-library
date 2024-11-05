export default function Badge({ color, variant, children }) {



    return (
        <p className={`${variant} ${color}`}>{children}</p>
    )

}