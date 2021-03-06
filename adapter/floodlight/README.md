OmniUI Floodlight Adapter 
-------------------------
Floodlight adapter module for OmniUI

###Installation###
1. Download the Floodlight Controller  
$ `git clone https://github.com/floodlight/floodlight.git`

2. Add OmniUI into Floodlight  
$ `cd floodlight/src/main/java/net/floodlightcontroller/`  
$ `cp -r ~/OmniUI/adapter/floodlight/omniui/ .`

3. Import OmniUI into Floodlight  
	a) $ `gedit ~/floodlight/src/main/resources/META-INF/services/net.floodlightcontroller.core.module.IFloodlightModule`  
	**Add the following to the end of the file**  
	`net.floodlightcontroller.omniui.OmniUI`  
	b) $ `gedit ~/floodlight/src/main/resources/floodlightdefault.properties`  
	**Add the following to the 2nd line of the file**  
	`net.floodlightcontroller.omniui.OmniUI,\`

4. Compile Floodlight  
$ `cd ~/floodlight; ant`  

###Execution###
1. Run the Floodlight Controller (Using a 2nd Terminal)  
$ `java -jar floodlight/target/floodlight.jar`

2. Run a simple Mininet topology (Using a 3rd Terminal)  
$ `sudo mn --controller=remote --topo tree,depth=2`

3. Start-up OmniUI Web UI (Using a 4th Terminal)  
$ `firefox ~/OmniUI/webui/index.html`

4. Setting ControllerName and OpenADM coreURL   
`curl --header "Content-type:application/json"-d '{"controllerName":"controllerName", "coreURL":"http://openadmIP"}' http://floodlightip:8080/wm/omniui/core`