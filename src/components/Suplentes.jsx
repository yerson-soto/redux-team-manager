import React from 'react';
import { connect } from 'react-redux'; 

const Suplentes = ({suplentes, quitarSuplente}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="suplentes">
            { 
                suplentes.map(suplente => (
                    <article className="suplente" key={suplente.id}>
                        <div>
                            <img src={suplente.foto} alt={suplente.nombre}/>
                            <button onClick={() => quitarSuplente(suplente)}>x</button>
                        </div>
                        <p>{suplente.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    suplentes: state.suplentes
});

const mapDispatchToProps = dispatch => ({
    quitarSuplente(suplente) {
        dispatch({
            type: 'QUITAR_SUPLENTE',
            suplente
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);