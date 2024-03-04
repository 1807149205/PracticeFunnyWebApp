package org.wzl.application.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/demo")
@RestController
public class DemoController {

    @GetMapping("/d1")
    public Map<String, Object> d1() {
        Map<String, Object> map = new HashMap<>();
        map.put("ok", "heelo");
        return map;
    }

}
