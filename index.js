"use strict";

var gif = require("./gif");
var svg = require("./svg");

module.exports = process;

function process (gif_data) {
  return svg(gif(gif_data));
}
