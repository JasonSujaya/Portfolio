# work in progress:
# I need to append points in checkAnswer and print them out
# I need to enable automatic changes

import random

# All global varibale for the game
proceed = True
listResult = ['1', '2']
name = ""

# Game Mechanics
points = 1
rolled = 1
answer = 1


def rollDice():
    global rolled
    rolled = random. randint(1, 6)
    listResult.append(str(rolled))
    return rolled


def userAnswer():
    global answer
    empty = True
    while (empty):
        try:
            answer = int(input('Please enter your guess : '))
            if (type(answer) == int) and (answer >= 1) and (answer <= 6):
                empty = False
        except:
            print('You did not enter a correct value :(, please try a again \n')


def checkAnswer(user, die):

    if user == die:
        print("Yayy + 1 Points")
        print(points)
    else:
        print('Not Correct')


def questionUsers():
    global proceed

    while (proceed):
        proceed = input(
            '\nShould we roll the dice?\nEnter Yes or No : ')
        if proceed.lower() == "yes" or proceed.lower() == "y":
            userAnswer()
            temp = rollDice()
            print('Dice result : {}'.format(temp))
            checkAnswer(rolled, answer)
        elif proceed.lower() == "no":
            print("Okay we will stop now!")
            proceed = False
        else:
            print("I can't understand it, please try again")


def playGame():
    print("Hey, let's play a game")
    name = input("Please enter your name first : ")
    print("Alright awesome, {} are you ready?")
    check = input("Do you want me to explain the rule?\n\nYes or No : ")
    checkStart(check)


def checkStart(check):
    global name
    if (check.lower() == "yes"):
        print("Well {} it's simple, you only have to guest a number from 1-6 \nIf you get things right we'll add point to you!".format(name))
    elif (check.something() == "no"):
        print("Ok you must be a pro {}, let's begin".format(name))


# playGame()
# questionUsers()

checkAnswer(rolled, answer)
