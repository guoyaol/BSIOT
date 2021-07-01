package com.example.demo.Controller;

import com.example.demo.Service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.example.demo.Entity.Device;

@CrossOrigin()
@RestController
@EnableAutoConfiguration
public class DeviceController {
    @Autowired
    private DeviceService deviceService;

    @PostMapping(value = "/showalldevice")
    public List<Device> ShowAllDevice(){
        return deviceService.ShowAllDevice();
    }

    @PostMapping(value = "/createdevice")
    public int Create(
            @RequestParam("clientid") String clientId,
            @RequestParam("name") String name,
            @RequestParam("description") String description){
        return deviceService.Create(clientId,name,description);
    }

    @PostMapping(value = "/modifydevice")
    public int Modify(
            @RequestParam("clientid") String clientId,
            @RequestParam("name") String name){
        return deviceService.Modify(clientId,name);
    }

    @PostMapping(value = "/deletedevice")
    public int Delete(
            @RequestParam("clientid") String clientid){
        return deviceService.Delete(clientid);
    }
}
