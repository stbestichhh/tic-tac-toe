export const Square = () => {
    return <button className="square">X</button>;
}

export const Row = () => {
    return (
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
    )
}

export default function Board() {
    return (
        <>
            <Row />
            <Row />
            <Row />
        </>
  );
}
