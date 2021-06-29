package com.example.demo.Service;

import com.example.demo.Entity.MsgDevice;

import java.util.List;
import java.util.Map;

public interface MsgDeviceService {
    int GetDeviceAmount();
    int GetTotalAmount();
    List<Float> GetHistoryLat(String clientid);
    List<Float> GetHistoryLng(String clientid);
    List<MsgDevice> GetAllInfo(String clientid);
    List<MsgDevice> GetLatestAlert();
}
