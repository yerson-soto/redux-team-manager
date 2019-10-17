import { createStore } from 'redux';

const initialState = {
    players : [
        {
            id: 1,
            nombre: 'Gabo',
            foto: 'https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg'
        },
        {
            id: 2,
            nombre: 'Dede',
            foto: 'https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg'
        },
        {
            id: 3,
            nombre: 'Lorenzo',
            foto: 'http://lorempixel.com/300/400/'
        },
        {
            id: 4,
            nombre: 'Martin',
            foto: 'http://lorempixel.com/350/400/'
        },
        {
            id: 5,
            nombre: 'Pedro',
            foto: 'http://lorempixel.com/380/400/'
        },
        {
            id: 6,
            nombre: 'Andres',
            foto: 'http://lorempixel.com/410/400/'
        },
        {
            id: 7,
            nombre: 'Carlos',
            foto: 'http://lorempixel.com/390/400/'
        },
        {
            id: 8,
            nombre: 'Julio',
            foto: 'http://lorempixel.com/400/410/'
        },
        {
            id: 9,
            nombre: 'Pepe',
            foto: 'http://lorempixel.com/410/400/'
        },
        {
            id: 10,
            nombre: 'Rocky',
            foto: 'http://lorempixel.com/400/390/'
        },
        {
            id: 11,
            nombre: 'Jorge',
            foto: 'http://lorempixel.com/410/420/'
        },
        {
            id: 12,
            nombre: 'Camilo',
            foto: 'http://lorempixel.com/390/410/'
        },
        {
            id: 13,
            nombre: 'Juan',
            foto: 'http://lorempixel.com/400/370/'
        },
    ],
    titulares : [],
    suplentes : []
};

const reducer = (state = initialState, action) => { 
    
    switch(action.type) {
        case 'AGREGAR_TITULAR':
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.player.id),
                titulares: [...state.titulares, action.player]
            }
        case 'AGREGAR_SUPLENTE':
            return {
                ...state,
                players: state.players.filter(player => player.id !== action.player.id),
                suplentes: state.suplentes.concat(action.player)
            }
        case 'QUITAR_SUPLENTE':
            return {
                ...state,
                players: [...state.players, action.suplente],
                suplentes: state.suplentes.filter(suplente => suplente.id !== action.suplente.id)
            }
        case 'QUITAR_TITULAR':
            return {
                ...state,
                players: state.players.concat(action.titular),
                titulares: state.titulares.filter(titular => titular.id !== action.titular.id)

            }
    }

    return state;
}

export default createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
