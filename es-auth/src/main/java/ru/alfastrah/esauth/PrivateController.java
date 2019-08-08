package ru.alfastrah.esauth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PrivateController {

    @GetMapping("/message")
    public String getPrivateMsg(@RequestParam String name){
        return "Server says: \"Hello, "+name+"\"";
    }

}
