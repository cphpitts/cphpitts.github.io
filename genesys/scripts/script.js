var current_setting = "genesys";
var result_success = 0;
var result_advantage = 0;
var result_triumph = 0;


function initialize() {
  const dice_tray = document.getElementById('tray');

}

function add_dice(die_type) {
  var dice_tray = document.getElementById("tray");
  var new_die = document.createElement("div");
  var new_die_image = document.createElement("img");
  new_die_image.src ="images/" + current_setting + "/dice_" + die_type + "_01.png";
  new_die_image.classList = die_type;
  new_die.appendChild(new_die_image);
  dice_tray.appendChild(new_die);
}

function change_style(style) {
  var base_style = document.getElementById('base_style');
  base_style.className = style;


  var current_dice = document.querySelectorAll('img');
  var current_dice_number = current_dice.length;
  for (i=0; i< current_dice_number; i++) {
    var current_image = current_dice[i].src;
    var current_image = current_image.replace(current_setting, style);
    current_dice[i].src = current_image;
  }
  current_setting = style;
}

function roll_dice() {
  result_success = 0;
  result_advantage = 0;
  result_triumph = 0;
  result_despair = 0;
  dice_pool = document.querySelectorAll('#tray img');
  console.log(dice_pool);
  dice_quantity = dice_pool.length;
  for (i=0; i<dice_quantity; i++) {
    die_name = dice_pool[i].getAttribute("class")
    if (die_name == 'boost') {
      var result = Math.floor(Math.random() * 6) + 1;
      switch(result) {
        case 1:
        case 2:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_05.png";
          break;
        case 3:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_01.png";
          result_success += 1;
          break;
        case 4:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_02.png";
          result_advantage += 1;
          break;
        case 5:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_03.png";
          result_advantage += 1;
          result_success += 1;
          break;
        case 6:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_04.png";
          dice_advantage += 2;
          break;
        default:
          alert(die_name + " Error: " + result);
          break;
      }
    } else if (die_name == 'ability') {
      console.log('1');
      var result = Math.floor(Math.random() * 8) + 1;
      console.log(result);
      switch(result) {
        case 1:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_06.png";
          break;
        case 2:
        case 3:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_01.png";
          result_success += 1;
          break;
        case 4:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_03.png";
          result_success += 2;
          break;
        case 5:
        case 6:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_02.png";
          result_advantage += 1;
          break;
        case 7:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_04.png";
          result_advantage += 1;
          result_success += 1;
          break;
        case 8:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_05.png";
          result_advantage += 2;
          break;
        default:
          alert(die_name + " Error: " + result);
          break;
      }
    } else if (die_name == 'proficiency') {
      var result = Math.floor(Math.random() * 12) + 1;
      switch(result) {
        case 1:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_07.png";
          break;
        case 2:
        case 3:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_01.png";
          result_success += 1;
          break;
        case 4:
        case 5:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_04.png";
          result_success += 2;
          break;
        case 6:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_02.png";
          result_advantage += 1;
          break;
        case 7:
        case 8:
        case 9:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_05.png";
          result_advantage += 1;
          result_success += 1;
          break;
        case 10:
        case 11:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_06.png";
          result_advantage += 2;
          break;
        case 12:
          dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_03.png";
          result_triumph += 1;
          result_success += 1;
          break;
        default:
          alert(die_name + " Error: " + result);
          break;
        }
      } else if (die_name == 'setback') {
        var result = Math.floor(Math.random() * 6) + 1;
        switch(result) {
          case 1:
          case 2:
            dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_03.png";
            break;
          case 3:
          case 4:
            dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_01.png";
            result_success -= 1;
            break;
          case 5:
          case 6:
            dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_02.png";
            result_advantage -= 1;
            break;
          default:
            alert(die_name + " Error: " + result);
            break;
          }
        } else if (die_name == 'difficulty') {
          var result = Math.floor(Math.random() * 8) + 1;
          switch(result) {
            case 1:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_06.png";
              break;
            case 2:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_01.png";
              result_success -= 1;
              break;
            case 3:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_03.png";
              result_success -= 2;
              break;
            case 4:
            case 5:
            case 6:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_02.png";
              result_advantage -= 1;
              break;
            case 7:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_04.png";
              result_advantage -= 2;
              break;
            case 8:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_05.png";
              result_success -= 1;
              result_advantage -= 1;
              break;
            default:
              alert(die_name + " Error: " + result);
              break;
            }
        } else if (die_name == 'challenge') {
          var result = Math.floor(Math.random() * 12) + 1;
          switch(result) {
            case 1:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_07.png";
              break;
            case 2:
            case 3:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_01.png";
              result_success -= 1;
              break;
            case 4:
            case 5:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_04.png";
              result_success -= 2;
              break;
            case 6:
            case 7:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_03.png";
              result_advantage -= 1;
              break;
            case 8:
            case 9:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_06.png";
              result_success -= 1;
              result_advantage -= 1;
              break;
            case 10:
            case 11:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_02.png";
              result_advantage -= 2;
              break;
            case 12:
              dice_pool[i].src = "images/" + current_setting + "/dice_" + dice_pool[i].getAttribute("class") + "_03.png";
              result_despair += 1;
              break;
            default:
              alert(die_name + " Error: " + result);
              break;
            }
        } else {
      alert ("Invalid Die Type. Something has gone wrong!");
    }

  }
  var results_container = document.getElementById('die_results');
  if (result_success < 0) {
    var success_failure = "Failure: ";
    result_success = Math.abs(result_success);
  } else {
    var success_failure = "Success: ";
  }
  if (result_advantage < 0) {
    var advantage_disadvantage = "Disadvantage: ";
    result_advantage = Math.abs(result_advantage);
  } else {
    var advantage_disadvantage = "Advantage: ";
  }
  if (result_triumph > 0) {
    var triumph_value = "Triumph: " + result_triumph + "<br />";
  } else {
    triumph_value = "";
  }
  if (result_despair > 0) {
    var despair_value = "Despair: " + result_despair + "<br />";
  } else {
    despair_value = "";
  }

  results_container.innerHTML = success_failure + result_success + "<br />" + advantage_disadvantage + result_advantage + "<br />" + triumph_value + triumph_value;


  console.log("Success: " + result_success);
  console.log("Advantage: " + result_advantage);
  console.log("Triumph: " + result_triumph);

}
