modalText = '\t<div id="myModal" class="modal fade" role="dialog">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-header">\n                    <button type="button" class="close" data-dismiss="modal">&times;</button>\n                    <h4 class="modal-title">Modal Header</h4>\n                </div>\n                <div class="modal-body">\n                    <p>Some text in the modal.</p>\n                </div>\n                <div class="modal-footer">\n                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>'

with open('modals.txt') as f:
    modals = [x[:-1] for x in f.readlines()]

title = False
titleText = ''
content = ''
print("\n\n\n\n\n=========Modals=========\n\n\n\n")
for line in modals:
    if (line == "==="):
        title = True
        print(modalText.replace("myModal", titleText.replace(' ', '-') + '-modal').replace("Some text in the modal.", content).replace("Modal Header", titleText))
        continue

    if (title):
        titleText = line
        title = False
        content = ''
    else:
        content = content + '\n<br>' + line

print("\n\n\n\n\n=========Cards=========\n\n\n")

cardText = '\t\t<div class="container-fluid">\n            <a data-toggle=\'modal\' data-target=\'#myModal\'>\n                <div class="row event-card">\n                    <div class="col-md-4 col-sm-12">\n                        <img class="img-responsive event-card-img" src="assets/img/pair coding.jpeg">\n                    </div>\n                    <div class="col-md-8 col-sm-12">\n                        <h1>Event Title!</h1>\n                    </div>\n                </div>\n            </a>\n        </div>'
for line in modals:
    if (line == "==="):
        print(cardText.replace("Event Title!", titleText).replace("myModal", titleText.replace(' ', '-') + '-modal'))
        title = True
        continue

    if (title):
        titleText = line
        title = False


print ("!!!!!!\nDon't copy the first modal and the first card\n!!!!!")
