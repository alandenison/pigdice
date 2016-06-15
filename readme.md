it should display random number on submit between 1 and 6
  input click, 4

it should keep a tally of the running turn total
  input click, click, 3, 9

it should reset turn score to 0 when you roll a 1
  input click, 1 turn score = 0

it should update the score variable if the user clicks hold or gets a 1
  input click on hold at 20, score adds 20 to total

it should have a second set of buttons player 2 which updates player 2 score
  input click p2 hold, updates player 2 score

it should end the game when 1 player's score is >= 100
  input click hold for player 1 to push score to 101, output= player 1 wins
