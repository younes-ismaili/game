// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   utils.js                                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: yismaili <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2022/04/26 12:50:39 by yismaili          #+#    #+#             //
//   Updated: 2022/04/26 22:30:57 by yismaili         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId)
  document.querySelector('#displayText').style.display = 'flex'
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie'
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
  }
}

let timer = 60
let timerId
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })
  }
}

