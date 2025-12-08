import json

# Read the new Polish tabs content
f = open('/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/polish_tabs_4_7.json', 'r')
new_tabs_content = json.load(f)
f.close()

# Read the content.js file
content_js_path = '/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/src/data/content.js'
f = open(content_js_path, 'r')
content_js = f.read()
f.close()

# Construct the new content string
new_content_str = ''
for i, tab in enumerate(new_tabs_content):
    new_content_str += '      {\n'
new_content_str += '        "id": "' + tab["id"] + '",\n'
new_content_str += '        "title": "' + tab["title"] + '",\n'
new_content_str += '        "content": [\n'
for j, item in enumerate(tab["content"]):
    new_content_str += '          {\n'

if "items" in item:
    new_content_str += '            "items": ' + json.dumps(item["items"], ensure_ascii = False) + '\n'
        elif "subsections" in item:
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
exit(1)

tab8_marker = '"id": "tab8"'
tab8_index = content_js.find(tab8_marker, pl_start_index)
if tab8_index == -1:
    print("Could not find Polish tab8")
exit(1)

tab8_obj_start = content_js.rfind('{', pl_start_index, tab8_index)
if tab8_obj_start == -1:
    print("Could not find start of tab8 object")
exit(1)

new_content_js = content_js[:tab8_obj_start]+ new_content_str + content_js[tab8_obj_start:]

f = open(content_js_path, 'w')
f.write(new_content_js)
f.close()

print("Successfully updated content.js with Tabs 4-7")
