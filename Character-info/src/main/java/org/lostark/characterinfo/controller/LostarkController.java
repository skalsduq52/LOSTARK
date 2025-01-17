package org.lostark.characterinfo.controller;

import org.lostark.characterinfo.service.CharacterService;
import org.lostark.characterinfo.vo.CharacterInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/")
public class LostarkController {

    @Autowired
    private CharacterService characterService;

    @CrossOrigin(origins = "http://127.0.0.1:3000")
    @GetMapping("/char/{characterName}")
    public CharacterInfo getUser(@PathVariable String characterName) throws IOException, InterruptedException {
        return characterService.getUser(characterName);
    }
}
