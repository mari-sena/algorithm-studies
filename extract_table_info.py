import requests
from bs4 import BeautifulSoup

def print_secret(url):
  response = requests.get(url)
  response.raise_for_status()

  soup = BeautifulSoup(response.text, "html.parser")
  rows = soup.find_all("tr")

  points = {}

  for row in rows[1:]:
    cells = [cell.get_text(strip=True) for cell in row.find_all(["td", "th"])]

    if len(cells) < 3:
      continue

    try:
      x = int(cells[0])
      char = cells[1]
      y = int(cells[2])
      points[(x, y)] = char
    except ValueError:
      continue

    if not points:
      return

    max_x = max(x for x, y in points)
    max_y = max(y for x, y in points)

    for y in range(max_y + 1):
      line = ""
      for x in range(max_x + 1):
        line += points.get((x, y), " ")
      print(line)