import json
import re

def main():
    # Read the new Polish FAQ content
try:
with open('/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/polish_faq_new.json', 'r') as f:
new_faq_content = json.load(f)
    except Exception as e:
print(f"Error reading JSON: {e}")
return

    # Read the content.js file
content_js_path = '/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/src/data/content.js'
try:
with open(content_js_path, 'r') as f:
content_js = f.read()
    except Exception as e:
print(f"Error reading content.js: {e}")
return

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
return

    # Find the start of the content array
content_start_index = content_js.find('"content": [', start_index)
if content_start_index == -1:
    print("Could not find content start")
return

    # Find the end of the tab8 object
tab8_end_index = content_js.find('      }', content_start_index)
if tab8_end_index == -1:
    print("Could not find tab8 end")
return

    # Replace the content block
new_content_js = content_js[:content_start_index]+ new_content_str + '\n' + content_js[tab8_end_index:]

with open(content_js_path, 'w') as f:
f.write(new_content_js)

print("Successfully updated content.js")

if __name__ == "__main__":
    main()
