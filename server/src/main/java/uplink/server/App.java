package uplink.server;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import uplink.server.services.HelloWorldService; 
/**
 * Hello world!
 *
 */
public class App 
{
	@SuppressWarnings("resource")
    public static void main( String[] args )
    {
		//Load definition from given XML file
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		
		HelloWorldService service = (HelloWorldService) context.getBean("helloWorldService");
		
		//Print default name
		String message = service.sayHello();
		System.out.println(message);
		
		//Set a new name
		service.setName("Uplink Subgroup");
		message = service.sayHello();
		System.out.println(message);
    }
}
