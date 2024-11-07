export default function Card({ children, Icon, iconBackground }) {
    return (
        <div className="card-component">
            <div className={`icon-container card-${iconBackground}`}>
                <Icon className='card-icon' />
            </div>
            {children}
        </div>
    )
}