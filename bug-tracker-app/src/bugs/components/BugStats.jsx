const BugStats = ({bugs}) => {
    const closedCount = bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
    return (
        <section className="stats">
            <span className="closed">{closedCount}</span>
            <span> / </span>
            <span>{bugs.length}</span>
        </section>
    )
}

export default BugStats;