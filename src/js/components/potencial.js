import $ from "jquery";
import "ion-rangeslider";

$(document).ready(function () {
  $("#range1").ionRangeSlider({
    type: "single",
    min: 0,
    max: 12,
    from: 1,
    to: 80,
    grid: true,
    postfix: " month",
    // grid_snap: true,
    grid_values: [0, 3, 6, 9, 12],
  });
});

$(document).ready(function () {
  $("#range2").ionRangeSlider({
    type: "single",
    min: 0,
    max: 15000,
    from: 2000,
    to: 80,
    grid: true,
    postfix: " €",
    // grid_snap: true,
    grid_values: [300, 3975, 7650, 11325, 15000],
  });
});
