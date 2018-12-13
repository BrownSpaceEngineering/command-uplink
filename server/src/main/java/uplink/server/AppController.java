package uplink.server;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;


@RestController
public class AppController 
{

    @MessageMapping("/status/Providence")
    @SendTo("/topic/responses/Providence")
    public Response respondProvidence(GroundStation gs) throws Exception {
        return new Response(HtmlUtils.htmlEscape(String.valueOf(gs.getStatus())));
    }
    
    @MessageMapping("/status/Rome")
    @SendTo("/topic/responses/Rome")
    public Response respondRome(GroundStation gs) throws Exception {
        return new Response(HtmlUtils.htmlEscape(String.valueOf(gs.getStatus())));
    }

    
}
