const Uppercaser = ({ children, color = '#f2990a', textTransform = 'uppercase' }) => {
    return (
        <p
            style={{
                color: color,
                textTransform: textTransform
            }}>
            {children}
        </p>
    )
}

export default Uppercaser