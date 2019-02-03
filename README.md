# Command Uplink

Web app for BSE flight software engineers to monitor groundstations/send uplink commands to EQUiSAT

## Setting up

Download this repository:

> `git clone https://github.com/BrownSpaceEngineering/command-uplink.git`.

Then download the necessary packages using `npm install`. 

To start the app, run

> `npm run dev`.

This will concurrently start the Java Spring server located in `server/target` and the front-end react-scripts.

Navigate to `http://localhost:3000/` to view the app on a web browser.

## Update server code

To make changes to the Java Spring server, you must re-package this into a .jar file. 

In the `server` folder, run `mvn package` to package the Java Maven project. Then, the above commands to start the app will reflect changes to server code.
