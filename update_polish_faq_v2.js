import json
import re

# Read the new Polish FAQ content
with open('/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/polish_faq_new.json', 'r') as f:
new_faq_content = json.load(f)

# Read the content.js file
content_js_path = '/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/src/data/content.js'
with open(content_js_path, 'r') as f:
content_js = f.read()

# Construct the new content string for tab8
new_content_str = '        "content": [\n'
for i, group in enumerate(new_faq_content):
        new_content_str += '          {\n'
new_content_str += f'            "bgColor": "{group["bgColor"]}",\n'
new_content_str += '            "subsections": [\n'
for j, sub in enumerate(group["subsections"]):
    new_content_str += '              {\n'
new_content_str += f'                "title": {json.dumps(sub["title"], ensure_ascii=False)},\n'
new_content_str += f'                "text": {json.dumps(sub["text"], ensure_ascii=False)}\n'
new_content_str += '              }'
if j < len(group["subsections"]) - 1:
    new_content_str += ','
new_content_str += '\n'
new_content_str += '            ]\n'
new_content_str += '          }'
if i < len(new_faq_content) - 1:
    new_content_str += ','
new_content_str += '\n'
new_content_str += '        ]'

# Find the start of Polish tab8
start_marker = '"id": "tab8",\n        "title": "8. CZĘSTO ZADAWANE PYTANIA",\n        "content": ['
start_index = content_js.rfind(start_marker)

if start_index == -1:
    print("Could not find Polish tab8 start")
exit(1)

# Find the start of the content array
content_start_index = content_js.find('"content": [', start_index)
if content_start_index == -1:
    print("Could not find content start")
exit(1)

# Find the end of the tab8 object
# We look for the closing brace of the tab object, which should be indented
# It should be the first '      }' after the content start
tab8_end_index = content_js.find('      }', content_start_index)
if tab8_end_index == -1:
    print("Could not find tab8 end")
exit(1)

# Replace the content block
new_content_js = content_js[:content_start_index]+ new_content_str + '\n' + content_js[tab8_end_index:]

with open(content_js_path, 'w') as f:
f.write(new_content_js)

print("Successfully updated content.js")
