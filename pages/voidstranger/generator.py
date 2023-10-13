import yaml
import re
import jinja2

with open("levels.yaml", "r") as file:

    root = yaml.safe_load(file)

    anchors = []
    print(root)
    
    for domain in root['Grey']:
        # Get all normal numeric anchors
        for domain_name, domain_floors in domain.items():
            if domain_floors:
                for floor in domain_floors:
                    to_test = floor.get("Floor", "???")
                    if re.match(r"^[0-9]{3}$", to_test):
                        print(f"Valid: {to_test}")
                        anchors.append(to_test)
                    else:
                        print(f"Invalid: {to_test}")

        anchors.sort()
        print("All anchors:")
        print(anchors)

        # Templatify w/ Jinja
        templateLoader = jinja2.FileSystemLoader(searchpath="./")
        templateEnv = jinja2.Environment(loader=templateLoader)
        TEMPLATE_FILE = "guide_template.html"
        template = templateEnv.get_template(TEMPLATE_FILE)
        output = template.render(root = root, anchors = anchors)
        with open("guide.html", "w+") as file:
            file.write(output)
        






