import sys
    from pypdf import PdfReader

try:
reader = PdfReader("reçeteler/reçete rino | 2025 CEFAKS.pdf")
page = reader.pages[0]
text = page.extract_text()
print(text)
except Exception as e:
print(f"Error: {e}")
