package uplink.server;

import java.util.concurrent.atomic.AtomicLong;
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

    @MessageMapping("/status")
    @SendTo("/topic/responses")
    public Response respond(GroundStation gs) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new Response("Connected to: " + HtmlUtils.htmlEscape(String.valueOf(gs.getStatus())));
    }
    
}
