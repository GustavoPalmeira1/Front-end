function PropsChildren({film}) {
    return (
        <>
            <h2>lista de Filmes(film)</h2>

            <ul>
                {film.map((filmes) => (
                    <li key={filmes.id} >
                        {filmes.genero} ({filmes.titulo})
                    </li>
                ))}
            </ul>
        </>
    )



}

export default PropsChildren

