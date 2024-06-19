const Child = (progs) => {
    return (
        <>
            <button onClick={() => progs.onNameChange('Jagrut')}>Change Name(Parent)</button>
        </>
    )
}
export default Child;
