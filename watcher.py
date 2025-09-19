import http.server
import socketserver
import sys
import time
from pathlib import Path

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

if __name__ == '__main__':
    web_dir = Path(__file__).resolve().parent
    print('Serving', web_dir)
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"Serving at http://localhost:{PORT}")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print('Stopping server')
        sys.exit(0)
