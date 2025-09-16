🔐 Module: Login

TC_LOGIN_001

Title: Verify successful login with valid credentials

Priority: High

Preconditions: User is on the Creatingly login page

Steps:

Navigate to https://stg.platform.creatingly.com/apps/

Enter valid credentials (L7e8PuJOwG166t9ZgEvxSB4wxg0m7Qhc)

Click Login

Expected Result: User is redirected to the Design Studio dashboard

TC_LOGIN_002

Title: Verify login with invalid credentials

Priority: Medium

Preconditions: User is on the login page

Steps:

Enter invalid username/password

Click Login

Expected Result: Login fails, error message is shown, user stays on login page

🎨 Module: Artboard

TC_ARTBOARD_001

Title: Verify user can drag and drop an Artboard into the canvas

Priority: High

Preconditions: User is logged in and Design Studio is open

Steps:

From the left panel, select an Artboard

Drag and drop the Artboard into the canvas

Expected Result: Artboard is successfully placed on the canvas

TC_ARTBOARD_002

Title: Verify dropping Artboard outside canvas is not allowed

Priority: Medium

Preconditions: User is logged in and Design Studio is open

Steps:

Try to drop Artboard outside the main canvas area

Expected Result: Artboard is not created, system prevents action, no error in UI

📊 Module: Chart in Stack Container

TC_CHART_001

Title: Verify dragging and dropping a Chart into a Stack Container

Priority: High

Preconditions: Stack container already placed on the canvas

Steps:

Drag a Chart element from the toolbar

Drop it inside the Stack Container

Expected Result: Chart is successfully added inside the Stack Container

TC_CHART_002

Title: Verify dropping Chart outside of Stack Container does not place it inside

Priority: Medium

Preconditions: Stack container already placed on the canvas

Steps:

Drag Chart element

Drop outside the Stack Container

Expected Result: Chart is placed outside the container (or not created, depending on system rules)

📐 Module: Alignment

TC_ALIGNMENT_001

Title: Verify center alignment of Chart element within container

Priority: High

Preconditions: Chart is added inside container

Steps:

Select Chart element

Use center alignment option

Expected Result: Chart is center-aligned inside the container

TC_ALIGNMENT_002

Title: Verify alignment option when no element is selected

Priority: Medium

Preconditions: No element is selected on the canvas

Steps:

Click center alignment option

Expected Result: System does not crash, option is disabled or ignored

↔️ Module: Resize

TC_RESIZE_001

Title: Verify resizing Chart element to fit container

Priority: High

Preconditions: Chart is placed inside container

Steps:

Select Chart

Drag resize handles to adjust

Fit Chart to container boundaries

Expected Result: Chart resizes properly and fits container without distortion

TC_RESIZE_002

Title: Verify resizing Chart beyond container boundaries is restricted

Priority: Medium

Preconditions: Chart is placed inside container

Steps:

Select Chart

Try to resize it beyond container size

Expected Result: System prevents overflow, Chart remains within container boundaries