package uplink.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "uplink.db","uplink.server"} )
@EnableMongoRepositories(basePackages = {"uplink.db"})

public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
