export default function Banner({ status, children }) {

    let style = ""

    if (status === "success") {
        style = "green"
    }
    if (status === "warning") {
        style = "yellow"
    }
    if (status === "error") {
        style = "red"
    }
    if (status === "neutral") {
        style = "blue"
    }


    return (
        <div className={`banner-component ${style}`}>
            {children}
        </div>
    )
}