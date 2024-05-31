function ButtonFilter({ textContent, isActiveFilter, changeProductFilter }) {
    return (
        <button
            className={`qa-Button--filter ${isActiveFilter ? "qa-Button--isActive" : "qa-toto"}`}
            onClick={() => changeProductFilter(isActiveFilter)}
        >
            {textContent}
        </button>
    );
}

export default ButtonFilter;
