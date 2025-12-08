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
# We need to format it to match the JS object structure
new_content_str = '        "content": [\n'
for group in new_faq_content:
    new_content_str += '          {\n'
new_content_str += f'            "bgColor": "{group["bgColor"]}",\n'
new_content_str += '            "subsections": [\n'
for i, sub in enumerate(group["subsections"]):
    new_content_str += '              {\n'
new_content_str += f'                "title": {json.dumps(sub["title"], ensure_ascii=False)},\n'
new_content_str += f'                "text": {json.dumps(sub["text"], ensure_ascii=False)}\n'
new_content_str += '              }'
if i < len(group["subsections"]) - 1:
    new_content_str += ','
new_content_str += '\n'
new_content_str += '            ]\n'
new_content_str += '          }'
if group != new_faq_content[-1]:
    new_content_str += ','
new_content_str += '\n'
new_content_str += '        ]'

# Regex to find the Polish tab8 content block
# It looks for "id": "tab8" inside the "pl" block and captures the "content": [...] part
# This is a bit complex with regex on a large file, so we'll try to locate the specific block
# We know the structure is:
#       {
#         "id": "tab8",
#         "title": "8. CZĘSTO ZADAWANE PYTANIA",
#         "content": [... ]
#
}

# Let's find the start of Polish tab8
start_marker = '"id": "tab8",\n        "title": "8. CZĘSTO ZADAWANE PYTANIA",\n        "content": ['
end_marker = '      }'

start_index = content_js.rfind(start_marker)
if start_index == -1:
    print("Could not find Polish tab8 start")
exit(1)

# Find the matching closing bracket for the content array
# The content array starts at start_index + len(start_marker) - len('"content": [')
# Actually, let's just replace from "content": [" down to the matching closing bracket of the content array

content_start_index = content_js.find('"content": [', start_index)
if content_start_index == -1:
    print("Could not find content start")
exit(1)

# We need to find where this content array ends. 
# Since we know the structure of the file, we can look for the closing of the tab8 object
# The tab8 object ends before the next tab or the end of the pl object.
# In the current file, tab8 is the last tab in 'pl'.
# So it ends before '    ]' which closes the 'tabs' array of 'pl'.

# Let's find the end of the tab8 object
tab8_end_index = content_js.find('      }', start_index)
if tab8_end_index == -1:
    print("Could not find tab8 end")
exit(1)

# Now we replace everything between content_start_index and tab8_end_index(exclusive of tab8_end_index, but inclusive of the closing bracket of content array)
# Wait, tab8_end_index is the closing brace of the tab object.The content array closing bracket is just before it.
# Let's just replace the whole content block.

original_content_block = content_js[content_start_index:tab8_end_index].rstrip()
# The original block includes "content": [... ]
# We want to replace it with "content": [... ] constructed above.

# Ensure new_content_str starts with "content": [
    new_full_str = '"content": [\n' + new_content_str[len('"content": [\n'): ]

# Replace
new_content_js = content_js[:content_start_index]+ new_content_str + '\n' + content_js[tab8_end_index:]

with open(content_js_path, 'w') as f:
f.write(new_content_js)

print("Successfully updated content.js")
