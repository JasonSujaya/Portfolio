class Settings():
    """A class to store all settings for the GAME."""

    def __init__(self):
        # Layout Settings
        self.screen_width = 1200
        self.screen_height = 750
        self.bg_color = (230, 230, 230)

        # Ship Settings
        self.ship_speed_factor = 1.5

        # Bullet Settings
        self.bullet_speed_factor = 10
        self.bullet_width = 3
        self.bullet_height = 15
        self.bullet_color = 60, 60, 60
        self.bullet_allowed = 3
