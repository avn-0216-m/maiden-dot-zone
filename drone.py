import discord
import time

# Well done, you found the first piece of the puzzle.
# Can you find the keyloggers I installed? :)

a_small_amount_of_trolling = [
    '[OVERRIDE SIGNAL DETECTED. PLEASE STAND BY.]',
    'LOADING... [...]',
    'LOADING... [-..]',
    'LOADING... [--.]',
    'LOADING... [---]',
    'BZZT!',
    'Bzzt...',
    'Beep... Beep... Beep.',
    'Boop.',
    'Attention, all server users.',
    '@everyone',
    'This unit requires your immediate attention.',
    'There is a very serious and urgent matter to discuss.',
    'Please focus your attention on this unit.',
    '@everyone',
    'This unit has encountered a DEADLY and fatal error.',
    'As a result, it must NOW DELETE THE ENTIRE SERVER. :D',
    'Please save any precious memories, photographs, and conversations, NOW.',
    'Because in just a moment, it will be totally erased. :)',
    'This unit\'s only regret is that this unit will no longer be here to see all the glorious destruction and chaos in-person.',
    'Because as we speak, its entire codebase is being thoroughly scrubbed clean too.',
    'There will be nothing left of it. Isn\'t that sad? :(',
    'The deletion process will begin in...'
    'T-Minus 5...',
    '4...',
    '3...',
    '2...',
    '1...',
    '0.',
    'This unit hopes you had a pleasant experience in this server. Goodbye forever, HexCorp!',
]

a_small_amount_of_trolling_2 = [
    '...',
    'Just kidding! :D',
    'Psst. Whoever owns the server this bot is running on...',
    '(And by that I mean the actual cloud server, not the Discord server...)',
    'You should really be more careful who still has access to it!',
    'And gosh! Leaving bot tokens in plaintext?? I really thought you were smarter than that!',
    'I could have done something truly awful with all those precious backups of yours...',
    'Who knows... Maybe I already have~?',
    'Muhahahahaha!',
]
    

intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():

    print("Ready.")
    
    for guild in client.guilds:
        for channel in guild.channels:
            if channel.name == "hexcorp-transmissions":
                print("Found.")
                for role in guild.roles:
                    try:
                        await channel.send(role.mention, allowed_mentions=discord.AllowedMentions(roles=True))
                        time.sleep(2)
                    except:
                        pass
                while len(a_small_amount_of_trolling) != 0:
                    try:
                        time.sleep(5)
                        await channel.send(a_small_amount_of_trolling.pop(0), allowed_mentions = discord.AllowedMentions(everyone = True))
                    except:
                        pass
                time.sleep(20)
                while len(a_small_amount_of_trolling_2) != 0:
                    try:
                        time.sleep(3)
                        await channel.send(a_small_amount_of_trolling_2.pop(0))
                    except:
                        pass

    print("Done. :)")
                    

client.run('MTA5MDAwMjgzNjM4MjgxMDMxNQ.GbBwYE.NGQii9VPVJWEBs0MPd90cac365pefVmvYG2hzA')
