import urllib.request
from html.parser import HTMLParser

class DocParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_pre = False
        self.code = []

    def handle_starttag(self, tag, attrs):
        if tag == 'pre':
            self.in_pre = True

    def handle_endtag(self, tag):
        if tag == 'pre':
            self.in_pre = False
            self.code.append("\n---\n")

    def handle_data(self, data):
        if self.in_pre:
            self.code.append(data)

url = 'https://visgl.github.io/react-google-maps/docs/get-started'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
response = urllib.request.urlopen(req)
html = response.read().decode('utf-8')

parser = DocParser()
parser.feed(html)
print("".join(parser.code))
