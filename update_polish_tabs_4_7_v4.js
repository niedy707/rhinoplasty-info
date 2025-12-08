import json
import sys

try:
    # Read the new Polish tabs content
with open('/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/polish_tabs_4_7.json', 'r') as f:
new_tabs_content = json.load(f)

    # Read the content.js file
content_js_path = '/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/src/data/content.js'
with open(content_js_path, 'r') as f:
content_js = f.read()

    # Construct the new content string
new_content_str = ''
for tab in new_tabs_content:
    new_content_str += '      {\n'
new_content_str += '        "id": "' + tab["id"] + '",\n'
new_content_str += '        "title": "' + tab["title"] + '",\n'
new_content_str += '        "content": [\n'
for j, item in enumerate(tab["content"]):
    new_content_str += '          {\n'

if "items" in item:
    new_content_str += '            "items": ' + json.dumps(item["items"], ensure_ascii = False) + '\n'

if "subsections" in item:
    new_content_str += '            "subsections": [\n'
for k, sub in enumerate(item["subsections"]):
    new_content_str += '              {\n'
new_content_str += '                "title": ' + json.dumps(sub["title"], ensure_ascii = False) + ',\n'
new_content_str += '                "text": ' + json.dumps(sub["text"], ensure_ascii = False) + '\n'
new_content_str += '              }'
if k < len(item["subsections"]) - 1:
    new_content_str += ','
new_content_str += '\n'
new_content_str += '            ]\n'

new_content_str += '          }'
if j < len(tab["content"]) - 1:
    new_content_str += ','
new_content_str += '\n'
new_content_str += '        ]\n'
new_content_str += '      },\n'

    # Find insertion point
pl_start_index = content_js.find('"pl": {')
if pl_start_index == -1:
    print("Could not find 'pl' object")
sys.exit(1)

tab8_marker = '"id": "tab8"'
tab8_index = content_js.find(tab8_marker, pl_start_index)
if tab8_index == -1:
    print("Could not find Polish tab8")
sys.exit(1)

tab8_obj_start = content_js.rfind('{', pl_start_index, tab8_index)
if tab8_obj_start == -1:
    print("Could not find start of tab8 object")
sys.exit(1)

    # Insert before tab8
new_content_js = content_js[:tab8_obj_start]+ new_content_str + content_js[tab8_obj_start:]

with open(content_js_path, 'w') as f:
f.write(new_content_js)

print("Successfully updated content.js with Tabs 4-7")

except Exception as e:
print(f"An error occurred: {e}")
sys.exit(1)
