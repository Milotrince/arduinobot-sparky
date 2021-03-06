let robot = new Robot()
robot.on('error', (data) => {
  if (data.event == 'connect') {
    window.location = '/disconnected'
  }
})
robot.on('connect', (data) => {
    nextStage()
})
let port = ''

stages = [
  {
    text: "Port?",
    type: true,
    input: true,
    action: function(input) {
      port = input.trim()
      nextStage()
    }
  },
  {
    text: "Connecting...",
    type: true,
    input: false,
    action: function(input) {
      if (port.length > 0) {
        robot.connect(port)
      } else {
        robot.connect()
      }
    }
  },
  {
    text: "Connected! (press enter to go to home)",
    type: true,
    input: true,
    action: function() {
      window.location = '/'
    }
  }
]

presentStage()