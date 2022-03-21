const HeaderText = ({left, right}) => {
    return (
        <div class="flex flex-row items-end align-end pb-4">
            <h4>
                {left}
            </h4>
            <h5 class="px-4 text-neutral-600">
                / {right}
            </h5>
        </div>
    )
}

export default HeaderText;
