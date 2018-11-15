package uplink.db;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import models.User;

@RestController
public class CommandController {

	MongoClientURI uri = new MongoClientURI(APIKeys.getMongoDBPassword());
			
	
    @RequestMapping("/update")
    public String update(@RequestParam String firstName, @RequestParam String lastName) {
    	
    	MongoClient mongoClient = new MongoClient(uri);
    	MongoDatabase database = mongoClient.getDatabase("UplinkDB");
    	MongoCollection<Document> collection = database.getCollection("UserData");

    	Document person = new User(firstName, lastName).toDoc();
    	person.append("_id", new ObjectId().toHexString());

		collection.insertOne(person);
		mongoClient.close();
		
        return "Database Updated!!";
    }
    
    @RequestMapping("/users")
    public List<Document> getUsers() {

    	MongoClient mongoClient = new MongoClient(uri);
    	MongoDatabase database = mongoClient.getDatabase("UplinkDB");
    	MongoCollection<Document> collection = database.getCollection("UserData");
    	
    	List<Document> users = (List<Document>) collection.find().into(
				new ArrayList<Document>());
    	
		mongoClient.close();

        return users;
    }
}
