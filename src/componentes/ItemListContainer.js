import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';

const suplementos = [
  {
    "id": 1,
    "img":"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/Proteina_oehkii.jpg",
    "nombre": "Proteina WHEY X-PRO COMPLEX ENA",
    "descripcion": "Aporta una combinación explosiva de proteínas, creatina, taurina, glutamina, aminoácidos, vitaminas, minerales y antioxidantes, en una nueva fórmula mejorada. Es la proteína de suero más avanzada del mercado." ,
    "precio": 4400
  },
  {
    "id": 2,
    "img":"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/yeah_buddy_jqyuy6.jpg" ,
    "nombre": "Pre-entreno Ronnie Coleman Signature Series Yeah Buddy",
    "descripcion": "Polvo de pre entrenamiento para mujeres y hombres, suplemento de energía, resistencia y enfoque con beta-alanina, 420 mg de cafeína por porción, bayas ácidas, 30 porciones.",
    "precio": 10000
  },
  
  {
    "id": 3,
    "img":"https://res.cloudinary.com/dbguo4alu/image/upload/v1664234662/HeavyFitness/creatina_pioj1n.jpg" ,
    "nombre": "Creatina micronizada en polvo ENA",
    "descripcion": "Un excelente suplemento pre entrenamiento ya que colabora en la formación de los componentes energéticos, mejora la potencia muscular y retrasa la fatiga muscular, preparando al cuerpo para un mejor rendimiento fí­sico.",
    "precio": 7300
  }
];


export default function ItemListContainer() {
  return (
  <ItemDetailContainer suplementos={suplementos}/>
  );
}