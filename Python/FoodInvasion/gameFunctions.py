import sys

import pygame


def checkEvents(ship):
    """ Respond to keypress and mouse events"""
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

        elif event.type == pygame.KEYDOWN:
            check_keydown_events(event, ship)
            if event.key == pygame.K_RIGHT:
                # Move ship to the right
                ship.rect.centerx += 1
            if event.key == pygame.K_LEFT:
                # Move ship to the right
                ship.rect.centerx -= 1
            if event.key == pygame.K_UP:
                # Move ship to the top
                ship.rect.centery -= 1
            if event.key == pygame.K_DOWN:
                # Move ship to the bottom
                ship.rect.centery += 1

        elif event.type == pygame.KEYUP:
            check_keyup_events(event, ship)


def check_keydown_events(event, ship):
    """Respond to keypresses to TRUE."""
    if event.key == pygame.K_RIGHT:
        ship.moving_right = True
    if event.key == pygame.K_LEFT:
        ship.moving_left = True
    if event.key == pygame.K_UP:
        ship.moving_top = True
    if event.key == pygame.K_DOWN:
        ship.moving_bot = True


def check_keyup_events(event, ship):
    """Respond to keypresses."""
    if event.key == pygame.K_RIGHT:
        ship.moving_right = False
    if event.key == pygame.K_LEFT:
        ship.moving_left = False
    if event.key == pygame.K_UP:
        ship.moving_top = False
    if event.key == pygame.K_DOWN:
        ship.moving_bot = False


def updateScreen(ai_settings, screen, ship):
    pygame.display.flip()
    screen.fill(ai_settings.bg_color)
    ship.blitme()
