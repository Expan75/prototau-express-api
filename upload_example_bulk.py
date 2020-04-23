# Imports
from pymongo import MongoClient
from requests import post
import numpy as np
import json
from time import sleep

""" NOTE: this script is not made with atomic data insertion in mind. It can fail midway through """

# open .json safely 
with open('data/example_data.json') as f:
  data = json.load(f) # len(data) = ~15k
  
  # chunkify
  chunks = np.array_split(data, 50)

  # Initate post reqs /w to server for each chunk
  for chunk in chunks:
    # print("printing type of chunk: ", type(chunk))
    # print(chunk)

    # Send request and report anything but HTTP:200
    r = post('http://localhost:5000/api/trackdata', json=chunk.tolist())
    if r.status_code != 200:
      Exception('Request was unsuccessful...')

print("Script ended gracefully...")