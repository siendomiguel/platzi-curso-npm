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
  'Messi'
];

const ramdomMsg = () => {
  const message = messages[Math.floor(Math.random() *
    messages.length)];
    console.log(message);
}

module.exports = { ramdomMsg };