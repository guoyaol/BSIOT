package com.example.demo.Service;

import com.example.demo.Entity.MsgDevice;

import java.util.List;
import java.util.Map;

public interface MsgDeviceService {
    int GetDeviceAmount();
    int GetTotalAmount();
    List<Double> GetHistoryLat(String clientid);
    List<Double> GetHistoryLng(String clientid);
    List<MsgDevice> GetAllInfo();
    List<MsgDevice> GetLatestAlert();
}
