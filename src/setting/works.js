

function importAll(r) {
    return r.keys().map(r);
}

const worksList = [
  {
    images: importAll(require.context('../img/projects/cyclehub/', true, /\.(png|jpe?g|svg)$/)),
    display: 1,
    title: 'CYCLEHUB',
    subtitle: 'Year 12 Major Work',
  },
  {
    images: importAll(require.context('../img/projects/starTracker/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Astrophotography Star Tracker',
    subtitle: 'DIYODE Issue 44',
  },
  {
    images: importAll(require.context('../img/projects/fumeExtractor/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Soldering Fume Extractor',
    subtitle: 'DIYODE Issue 35',
  },
  {
    images: importAll(require.context('../img/projects/racingDashboard/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Simulation Racing Dashboard',
    subtitle: 'DIYODE Issue 42 & 43',
  },
  {
    images: importAll(require.context('../img/projects/vendingMachine/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Arduino-Powered Nano Vending Machine',
    subtitle: 'DIYODE Issue 43',
  },
  {
    images: importAll(require.context('../img/projects/tictactoe/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'RGB TicTacToe Gameboard',
    subtitle: 'DIYODE Issue 29',
  },
  {
    images: importAll(require.context('../img/projects/pcDashboard/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Retro Computer Dashboard',
    subtitle: 'DIYODE Issue 28',
  },
  {
    images: importAll(require.context('../img/projects/microbitGuide/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'MicroPython Programming Guide on Micro:Bit',
    subtitle: 'DIYODE Issue 33 & 34',
  },
  {
    images: importAll(require.context('../img/projects/glowbitProject/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'GlowBit and Micro:Bit Review',
    subtitle: 'DIYODE Issue 35',
  },
  {
    images: importAll(require.context('../img/projects/powerLogger/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Portable Arduino Power Logger',
    subtitle: 'DIYODE Issue 46 & 47',
  },
  {
    images: importAll(require.context('../img/projects/arduinoIDE2/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Arduino IDE 2.0 Beta Review',
    subtitle: 'DIYODE Issue 45',
  },
];



export default worksList;