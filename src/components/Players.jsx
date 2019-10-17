import React from 'react';
import { connect } from 'react-redux';

const Players = ({players, agregarTitular, agregarSuplente}) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                players.map(player => (
                    <article className="jugador" key={player.id}>
                        <img src={player.foto} alt={player.nombre}/>
                        <h3>{player.nombre}</h3>
                        <div>
                            <button onClick={() => agregarTitular(player)}>Titular</button>
                            <button onClick={() => agregarSuplente(player)}>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    players: state.players 
});

const mapDispatchToProps = dispatch => ({
    agregarTitular(player) {
        dispatch({
            type: 'AGREGAR_TITULAR',
            player
        })
    },
    agregarSuplente(player) {
        dispatch({
            type: 'AGREGAR_SUPLENTE',
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);