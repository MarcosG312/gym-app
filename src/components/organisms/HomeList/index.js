import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'


const FAKE_DATA = [
    {
        name: "Peito/Ombro",
        id: 0,
        image_url:
        'https://media.istockphoto.com/id/1191770356/pt/foto/bench-press-in-gym.jpg?s=612x612&w=0&k=20&c=m75ae0fpW14K1dt0h0Od_-_89uWApU_utI5to_5MRyM=',
        title: 'Hoje é dia de',

        
    },
    {
        name: "Quadríceps",
        id: 1,
        image_url:
        'https://pratiquefitness.com.br/blog/wp-content/uploads/2018/07/nove-exercicios-fisicos-para-ter-pernas-lindas-e-torneadas.jpg',
        title: 'Hoje é dia de',

    },
    {
        name: "Bíceps/tríceps",
        id: 2,
        image_url:
        'https://media.istockphoto.com/id/1312685184/pt/foto/ripped-bodybuilder-exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=XQmCA5d20BsIrEjIfZATygoCZ9DQsVowcn56FKCGcW0=',
        title: 'Hoje é dia de',

    },
    {
        name: "Posterior/Glúteos",
        id: 3,
        image_url:
        'https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Hoje é dia de',

    },
    {
        name: "Costas/Trapézio",
        id: 4,
        image_url:
        'https://media.istockphoto.com/id/1336062189/pt/foto/muscular-man-workout-in-gym-doing-exercise-for-back-lat-pulldown-strong-male-rear-view.jpg?s=612x612&w=0&k=20&c=XOwmEQ_Rr7jnC9EiszliJfrLPzilW3UrN6c6tAlxv_8=',
        title: 'Hoje é dia de',
      
    },

]

export const HomeList = () => {
    return (
    <FlatList 
        
        data={FAKE_DATA}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={( item) => String(item.id)}
        />
    )

}