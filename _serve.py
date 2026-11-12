"""Local preview server that mimics GitHub Pages' extensionless URLs.

/pages/projects is served from pages/projects.html, as on the live site.
Usage: python3 _serve.py [port]   (default port 8000)

The leading underscore keeps GitHub Pages (Jekyll) from publishing this file.
"""

import functools
import http.server
import os
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        fs_path = super().translate_path(path)
        if not os.path.exists(fs_path) and os.path.isfile(fs_path + ".html"):
            return fs_path + ".html"
        return fs_path


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    handler = functools.partial(Handler, directory=ROOT)
    with http.server.ThreadingHTTPServer(("", port), handler) as httpd:
        print(f"Serving {ROOT} at http://localhost:{port}")
        httpd.serve_forever()
