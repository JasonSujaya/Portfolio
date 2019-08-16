import pygame
from pygame.sprite import Sprite


class Alien(Sprite):
    """A class to represent a single enemy in the fleet."""

    def __init__(self, ai_settings, screen):
        """Initialize the enemy and set its starting position."""
        super(Alien, self).__init__()
        self.screen = screen
        self.ai_settings = ai_settings

        # Load the enemy image and set its rect attribute.
        self.image = pygame.image.load('assets/carrot.png')
        self.rect = self.image.get_rect()

        # Start each new enemy near the top left of the screen.
        self.rect.x = self.rect.width
        self.rect.x = self.rect.width

        # Store the enemy's exact position.
        self.x = float(self.rect.x)

    def blitme(self):
        """Draw the enemy at its current location."""
        self.screen.blit(self.image, self.rect)
