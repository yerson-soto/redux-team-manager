import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(titular => (
                    <article className="titular" key={titular.id}>
                        <div>
                            <img src={titular.foto} alt={titular.nombre}/>
                            <button onClick={() => quitarTitular(titular)}>x</button>
                        </div>
                        <p>{titular.nombre}</p>
                    </article>
                ))
            }
        </div>      
    </section>
);

const mapStateToProps = state => ({
    titulares : state.titulares
});

const mapDispatchToProps = dispatch => ({
    quitarTitular(titular) {
        dispatch({
            type: 'QUITAR_TITULAR',
            titular
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);