import yaml
import re
import jinja2

with open("levels.yaml", "r") as file:

    root = yaml.safe_load(file)
    
    # Print some data.
    for domain in root['Levels']['Grey']:
        for domain_name, domain_floors in domain.items():
            print("------")
            print(domain_name)
            if domain_floors:
                for floor in domain_floors:
                    for dialogue_name, dialogues in floor.get("Void Memory", {}).items():
                        print(dialogue_name)
                        print(dialogues)
                        print("----")


        print(root['Levels']['Grey'])

        # Templatify w/ Jinja
        templateLoader = jinja2.FileSystemLoader(searchpath="./")
        templateEnv = jinja2.Environment(loader=templateLoader)
        TEMPLATE_FILE = "guide_template.html"
        template = templateEnv.get_template(TEMPLATE_FILE)
        output = template.render(domains = root['Levels']['Grey'])
        with open("guide.html", "w+") as file:
            file.write(output)
        






