import sys
import pygame
from pygame.sprite import Group

# Custom Module Imports
from config import Settings
from inGame.characters import Ship
import gameFunctions as gf
from inGame.alien import Alien


def run_game():
    # Initialize the classes
    ai_settings = Settings()

    # Initialize games and create screen object
    pygame.init()
    screen = pygame.display.set_mode(
        (ai_settings.screen_width, ai_settings.screen_height))
    pygame.display.set_caption("Food Invasion")

    # Make a ship
    ship = Ship(ai_settings, screen)

    # Make a group to store the bullets
    bullets = Group()

    # Make an Alien
    alien = Alien(ai_settings, screen)

    # Main loop start
    while True:
        gf.checkEvents(ai_settings, screen, ship, bullets)
        ship.update()
        gf.updateScreen(ai_settings, screen, ship)

        gf.update_screen(ai_settings, screen, ship, alien, bullets)
        gf.update_bullets(bullets)


run_game()
