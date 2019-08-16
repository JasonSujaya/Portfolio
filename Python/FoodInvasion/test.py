import pygame
import random
BLACK = (0,   0,   0)
WHITE = (255, 255, 255)
RED = (255,   0,   0)
BLUE = (0,   0, 255)


class Block(pygame.sprite.Sprite):
    def __init__(self, color):
        super().__init__()
        self.image = pygame.Surface([20, 15])
        self.image.fill(color)
        self.rect = self.image.get_rect()


class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface([15, 20])
        self.image.fill(RED)
        self.rect = self.image.get_rect()

    def update(self):
        pos = pygame.mouse.get_pos()
        self.rect.x = pos[0]


class Bullet(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)

        self.image = pygame.Surface([10, 10])
        self.image.fill(BLACK)
        self.rect = self.image.get_rect()

    def update(self):
        self.rect.y -= 3


pygame.init()
screen_size = [700, 500]
screen = pygame.display.set_mode(screen_size)
pygame.display.set_caption("Shooting things - Vers 2.0 of Blocks")
all_sprites_list = pygame.sprite.Group()
blocks_list = pygame.sprite.Group()
bullets_list = pygame.sprite.Group()


for i in range(50):
    block = Block(BLUE)
    block.rect.x = random.randrange(660)
    block.rect.y = random.randrange(480)

    blocks_list.add(block)
    all_sprites_list.add(block)
player = Player()
all_sprites_list.add(player)
score = 0
player.rect.y = 670
done = False
clock = pygame.time.Clock()
while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        if event.type == pygame.MOUSEBUTTONDOWN:
            bullet = Bullet()
            bullet.rect.x = player.rect.x
            bullet.rect.y = player.rect.y
            all_sprites_list.add(bullet)
            bullets_list.add(bullet)
    all_sprites_list.update()

    for bullet in bullets_list:
        block_hit_list = pygame.sprite.spritecollide(bullet, blocks_list, True)

        for block in block_hit_list:
            bullets_list.remove(bullet)
            all_sprites_list.remove(bullet)
            score += 1
            print(score)
        if bullet.rect.y < -10:
            bullets_list.remove(bullet)
            all_sprites_list.remove(bullet)
    screen.fill(WHITE)
    all_sprites_list.draw(screen)
    pygame.display.update()
    clock.tick(60)
pygame.quit()
