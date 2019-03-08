const OPTIONS = require("./options")
const Kahoot = require("../lib").default
const Helpers = Kahoot.Helpers.default

const client = new Kahoot.Client.default(OPTIONS.pin, `@idiidk-${Math.floor(Math.random() * 1000)}`)

client.emitter.on("player", (m) => {
  console.log(m)
})

describe("Client", function () {
  let player
  let ghost

  describe("#initialize", function () {
    it("should initialize a session succesfully", function () {
      return client.initialize();
    })
  })

  describe("#doLogin", function () {
    it("should be able to login with a username", function () {
      return client.doLogin();
    })
  })

  describe("#addPlayer", function () {
    it("should be able to add a player", function () {
      player = client.addPlayer(`ghost-${Math.floor(Math.random() * 1000)}`, Helpers.randomCid(), true)
    })
  })
})