1.  # Essential Files
Project Root Files
- package.json (Manages dependencies and scripts)
- angular.json (Angular project configuration)
- tsconfig.json (TypeScript configuration)
- tsconfig.app.json (Configuration for Angular app)
- tsconfig.spec.json (Configuration for unit tests)
- karma.conf.js (Configuration for Karma test runner)
- src/styles.css (Global CSS file)
- src/index.html (Main HTML file)

# Angular App Files
- src/main.ts (Bootstrap file)
- src/app/app.module.ts (Main module)
-  src/app/app.component.ts (Root component)
- src/app/app.component.html (Root component template)
- src/app/app.component.css (Root component styles)
-  Task Management Specific Files
- src/app/task-list/task-list.component.ts (Task list component logic)
- src/app/task-list/task-list.component.html (Task list UI)
- src/app/task-list/task-list.component.css (Task list styles)
- src/app/services/task.service.ts (Service for managing tasks)
  
# 2. Installing Dependencies
Make sure you have Node.js and Angular CLI installed.

# Step 1: Install Angular CLI (if not installed)
```
npm install -g @angular/cli
```
# Step 2: Create a New Angular Project (if not already done)
```
ng new task-manager
cd task-manager
```
# Step 3: Install Required Dependencies
Inside your project folder, install necessary dependencies:
```
npm install
```
This will install:

Angular Core Libraries (pre-installed with ng new)
RxJS (for handling observables)
FormsModule (for handling forms)
HttpClientModule (for HTTP calls)

3. Running the Project
After installing dependencies, start the development server:
```
ng serve
```
Then, open http://localhost:4200 in your browser.

