
try:
with open('/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/polish_tabs_4_7.json', 'r') as f:
lines = f.readlines()
        # Remove first line([) and last line(])
        # We assume the file is formatted with [on first line and] on last
insert_lines = lines[1: -1]
insert_str = "".join(insert_lines)
        # Add comma to the last closing brace
insert_str = insert_str.rstrip() + ",\n"

content_js_path = '/Users/ibrahimyagci/.gemini/antigravity/scratch/rhinoplasty-info/src/data/content.js'
with open(content_js_path, 'r') as f:
content = f.read()

    # Find insertion point
pl_start = content.find('"pl": {')
if pl_start == -1:
        raise Exception("Could not find 'pl' object")

tab8_marker = '"id": "tab8"'
tab8_pos = content.find(tab8_marker, pl_start)
if tab8_pos == -1:
        raise Exception("Could not find Polish tab8")

    # Find the opening brace before "id": "tab8"
insert_pos = content.rfind('{', pl_start, tab8_pos)
if insert_pos == -1:
        raise Exception("Could not find start of tab8 object")

    # Insert the new content
new_content = content[:insert_pos]+ insert_str + content[insert_pos:]

with open(content_js_path, 'w') as f:
f.write(new_content)

print("Successfully updated content.js")

except Exception as e:
print(f"Error: {e}")
exit(1)
