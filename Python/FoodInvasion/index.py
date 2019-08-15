import sys
import pygame

# Custom Module Imports
from config import Settings
from inGame.characters import Ship
import gameFunctions as gf


def run_game():
    # Initialize the classes
    ai_settings = Settings()

    # Initialize games and create screen object
    pygame.init()
    screen = pygame.display.set_mode(
        (ai_settings.screen_width, ai_settings.screen_height))
    pygame.display.set_caption("Food Invasion")

    # Make a ship.u
    ship = Ship(ai_settings, screen)
    # Main loop start
    while True:
        gf.checkEvents(ship)
        ship.update()
        gf.updateScreen(ai_settings, screen, ship)


run_game()
