var CONFIG = {
  title: {
    color: '#05668d',
    text: 'Holstebro Kommune - organisationsoversigt'
  },
  //provide text to display when clicked on the (i) button (you can use HTML). Leave empty if not needed
  information:
  'Hvis du ser noget er forkert så send en <em>mail</em> til <a href="mailto:os@holstebro.dk?Subject=Organisationsdiagrammet" target="_top">os@holstebro.dk </a>',
  photoUrl: {
    prefix: 'photos/',
    suffix: '.png'
  },
  linkUrl: {
    prefix: 'photos/person',
    suffix: '.png'
  },
  startView: {
    photos: false,
    names: true,
    columnview: false,
    staffColumnview: false,
    showNrDepartments: false,
    showNrPeople: false
  },
  enableScreenCapture: false,
  levelColors: ['#05668d', '#05668d', '#05668d', '#05668d', '#05668d', '#05668d', '#05668d', '#05668d'],
  editCommand: '_edit', //the command to type in the searchbar to switch to edit mode
  dataFields: [{ name: 'Location', type: 'text' }]
}
