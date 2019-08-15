import pygame


class Ship():

    def __init__(self, ai_settings, screen):
        self.screen = screen
        self.ai_settings = ai_settings

        # Load the ship image and initial positions.
        self.image = pygame.image.load(
            'assets/ship.bmp')
        self.rect = self.image.get_rect()
        self.screen_rect = screen.get_rect()

        # Start each new ship at the bottom center of the screen.
        self.rect.centerx = self.screen_rect.centerx
        self.rect.bottom = self.screen_rect.bottom

        # Store a decimal value for the ship's center.
        self.centerx = float(self.rect.centerx)
        self.centery = float(self.rect.centery)

        # Allow the ship for continuous movement
        self.moving_right = False
        self.moving_left = False
        self.moving_top = False
        self.moving_bot = False

    def update(self):
        """Update the ship's position based on the movement flag."""
        if self.moving_right and self.rect.right < self.screen_rect.right:
            self.centerx += self.ai_settings.ship_speed_factor
        elif self.moving_left and self.rect.left > 0:
            self.centerx -= self.ai_settings.ship_speed_factor
        elif self.moving_top and self.rect.top > 650:
            print(self.rect.top)
            self.centery -= self.ai_settings.ship_speed_factor
        elif self.moving_bot:
            self.centery += self.ai_settings.ship_speed_factor

        # Update rect object from self.center.
        self.rect.centerx = self.centerx
        self.rect.centery = self.centery

    def blitme(self):
        self.screen.blit(self.image, self.rect)
