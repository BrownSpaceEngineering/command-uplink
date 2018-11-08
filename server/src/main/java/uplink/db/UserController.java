package uplink.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	private UserRepo repository;

    @RequestMapping("/update")
    public String update() {
    	repository.deleteAll();
    	repository.save(new User("Arvind", "Yalavarti"));
    	repository.save(new User("Arvind", "Y"));
    	repository.save(new User("A", "Y"));

        return "Database Updated!!";
    }

    @RequestMapping("/users")
    public List<User> getAll() {

        return repository.findAll();
    }

    @RequestMapping("/search")
    public String getById(@RequestParam(value="id", defaultValue="") String id) {
    	
    	Optional<User> user = repository.findById(id);
    	if (user.isPresent()) {
    		return user.get().toString();
    	} else {
    		return "No user found with that ID";
    	}
    	
    }
	
}
