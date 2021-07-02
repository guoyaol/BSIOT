package com.example.demo.Controller;

import com.example.demo.Entity.MsgDevice;
import com.example.demo.Service.MsgDeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.*;



@CrossOrigin()
@RestController
@EnableAutoConfiguration
public class MsgDeviceController {
    @Autowired
    private MsgDeviceService msgdeviceService;

    @PostMapping(value = "/getdeviceamount")
    public int GetDeviceAmount(){
        return msgdeviceService.GetDeviceAmount();
    }

    @PostMapping(value = "/gettotalamount")
    public int GetTotalAmount(){
        return msgdeviceService.GetTotalAmount();
    }

    @PostMapping(value = "/gethistory")
    public Map<String,Object> GetHistory(@RequestParam("clientid") String clientid){
        Map<String,Object> map=new HashMap<String, Object>();

        List<Double> latlist = msgdeviceService.GetHistoryLat(clientid);
        List<Double> lnglist = msgdeviceService.GetHistoryLng(clientid);
        map.put("lat",latlist);
        map.put("lng",lnglist);
        return map;
    }

    @PostMapping(value = "/getallinfo")
    public List<MsgDevice> GetAllInfo(){
        return msgdeviceService.GetAllInfo();
    }

    @PostMapping(value = "/getlatestalert")
    public List<MsgDevice> GetLatestAlert(){
        return msgdeviceService.GetLatestAlert();
    }


}
