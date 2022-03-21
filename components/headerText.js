const HeaderText = ({left, right, className}) => {
    return (
        <div className={`flex flex-row items-end align-end pb-4 ${className}`}>
            <h4>
                {left}
            </h4>
            <h5 className="px-4 text-neutral-600">
                / {right}
            </h5>
        </div>
    )
}

export default HeaderText;
