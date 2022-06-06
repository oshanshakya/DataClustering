import requests
from bs4 import BeautifulSoup

URL = "https://www.facebook.com/oshanshakya/about_overview"
r = requests.get(URL)

soup = BeautifulSoup(r.content, 'html5lib')
print(soup.prettify)
