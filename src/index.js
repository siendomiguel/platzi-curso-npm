const messages = [
  'Ana',
  'Miguel',
  'Oscar',
  'Benito',
  'Carlos',
  'Diego',
  'Juan',
  'Carolina',
  'Manolo',
  'Messi',
  'Camila',
  'Laura',
  'Marcos',
  'Yolanda',
  'Edimar',
  'Camilo',
  'Edgar',
  'Edgardo',
  'Luis',
  'Victor',
  'Victoria',
  'Pedro',
  'Gustavo',
  'Judith',
  'Asdrubal',
  'Maritza',
  'Andreina',
  'Karen',
  'Ivan',
  'Mauro',
  'Emily',
  'Stephanie',
  'Javier',
  'Sebastian',
  'Ingrid',
  'Gabriel',
  'David',
  'Jesus',
  'Lucia',
  'Paula',
  'Silvana',
  'Lenys',
  'Angie'
];

const ramdomMsg = () => {
  const message = messages[Math.floor(Math.random() *
    messages.length)];
    console.log(message);
}

module.exports = { ramdomMsg };