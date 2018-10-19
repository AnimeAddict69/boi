import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
Client = discord.Client() 
client = commands.Bot(command_prefix = "R") 

@client.event 
async def on_ready():
    print("Bot is online and connected to Discord") 

@client.event
async def on_message(message):
    if message.content == "cookie":
        await client.send_message(message.channel, ":cookie:") 

client.run("NTAwMzU3MTcwNTg4NjgwMTkz.DqMOKA.1-kAN6o4jmcsQyJeR-cE3wY4JGA") 
