import sys

import pygame
from inGame.bullets import Bullet
from inGame.alien import Alien


def checkEvents(ai_settings, screen, ship, bullets):
    """ Respond to keypress and mouse events"""
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

        elif event.type == pygame.KEYDOWN:
            check_keydown_events(event, ai_settings, screen, ship, bullets)
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


def check_keydown_events(event, ai_settings, screen, ship, bullets):
    """Respond to keypresses to TRUE for movement."""
    if event.key == pygame.K_RIGHT:
        ship.moving_right = True
    elif event.key == pygame.K_LEFT:
        ship.moving_left = True
    elif event.key == pygame.K_UP:
        ship.moving_top = True
    elif event.key == pygame.K_DOWN:
        ship.moving_bot = True
    elif event.key == pygame.K_SPACE:
        fire_bullet(ai_settings, screen, ship, bullets)


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


def update_screen(ai_settings, screen, ship, aliens, bullets):
    """Redraw all bullets behind ship and aliens"""
    for bullet in bullets:
        bullet.draw_bullet()
    aliens.draw(screen)


def update_bullets(bullets):
    # Update bullet positions
    bullets.update()

    for bullet in bullets.copy():
        if bullet.rect.bottom <= 0:
            bullets.remove(bullet)


def fire_bullet(ai_settings, screen, ship, bullets):
    # Create a new bullet and add it to the bullets group.
    if len(bullets) < ai_settings.bullet_allowed:
        new_bullet = Bullet(ai_settings, screen, ship)
        bullets.add(new_bullet)


def get_number_aliens_x(ai_settings, alien_width):
    """Determine the number of aliens that fit in a row."""
    available_space_x = ai_settings.screen_width - 2 * alien_width
    number_aliens_x = int(available_space_x / (2 * alien_width))
    return number_aliens_x


def create_alien(ai_settings, screen, aliens, alien_number):
    """Create an alien and place it in the row."""
    alien = Alien(ai_settings, screen)
    alien_width = alien.rect.width
    alien.x = alien_width + 2 * alien_width * alien_number
    alien.rect.x = alien.x
    aliens.add(alien)


def create_fleet(ai_settings, screen, aliens):
    # Spacing between each alien is equal to one alien width.
    alien = Alien(ai_settings, screen)
    number_aliens_x = get_number_aliens_x(ai_settings, alien.rect.width)

    # Spacing between each alien is equal to one alien width.
    for alien_number in range(number_aliens_x):
        create_alien(ai_settings, screen, aliens, alien_number)
