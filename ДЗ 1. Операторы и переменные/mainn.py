import requests

r =requests.get('https://www.simpleticker.online/track')
r.status_code
print(r.text)