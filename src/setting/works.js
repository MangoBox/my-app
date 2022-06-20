

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
  {
    images: importAll(require.context('../img/projects/pidControl/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'PID Control Project',
    subtitle: 'DIYODE Issue 58',
  },
  {
    images: importAll(require.context('../img/projects/waterBottleLauncher/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Water Bottle Rocket Launcher',
    subtitle: 'DIYODE Issue 56',
  },
  {
    images: importAll(require.context('../img/projects/audioMixer/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'DIY PC Audio Mixer',
    subtitle: 'DIYODE Issue 56',
  },
  {
    images: importAll(require.context('../img/projects/tinyProgramming/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: '\'Ultra\' Tiny Programming (ATTiny10)',
    subtitle: 'DIYODE Issue 55',
  },
  {
    images: importAll(require.context('../img/projects/connect4/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Gigantic Connect 4',
    subtitle: 'DIYODE Issue 54',
  },
  {
    images: importAll(require.context('../img/projects/wioTerminal/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Making with Wio Terminal',
    subtitle: 'DIYODE Issue 54',
  },
  {
    images: importAll(require.context('../img/projects/gpsTracker/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Raspberry Pi Powered GPS Tracker',
    subtitle: 'DIYODE Issue 54',
  },
  {
    images: importAll(require.context('../img/projects/gotoTelescope/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Hacking a Motorised Telescope',
    subtitle: 'DIYODE Issue 52',
  },
  {
    images: importAll(require.context('../img/projects/loadCells/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Under Pressure - Load Cells',
    subtitle: 'DIYODE Issue 51',
  },
  {
    images: importAll(require.context('../img/projects/dogTrainer/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'AI Powered Dog Trainer',
    subtitle: 'DIYODE Issue 49 & 50',
  },
  {
    images: importAll(require.context('../img/projects/rpiDashboard/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'DIY Raspberry Pi Car Dashboard',
    subtitle: 'DIYODE Issue 49',
  },
  {
    images: importAll(require.context('../img/projects/arduinoAndPi/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Arduino with Pi - RP2040 Connect',
    subtitle: 'DIYODE Issue 48',
  },
  {
    images: importAll(require.context('../img/projects/cameraIntervalometer/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Camera Intervalometer',
    subtitle: 'DIYODE Issue 50',
  },
  {
    images: importAll(require.context('../img/projects/3in1projects/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'Easy Arduino Sensor Kit Based Projects',
    subtitle: 'DIYODE Issue 44',
  },
  {
    images: importAll(require.context('../img/projects/legoLighting/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'DIY Lego Lighting',
    subtitle: 'DIYODE Issue 44',
  },
  {
    images: importAll(require.context('../img/projects/iotDisplay/', true, /\.(png|jpe?g|svg)$/)),
    display: 0,
    title: 'DIY IoT Display',
    subtitle: 'DIYODE Issue 41',
  },
];



export default worksList;