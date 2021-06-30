package com.example.demo.Dao;

import com.example.demo.Entity.MsgDevice;

import java.util.List;
import java.util.Map;

public interface MsgDeviceDao {
    int GetDeviceAmount();
    int GetTotalAmount();
    List<Double> GetHistoryLat(String clientid);
    List<Double> GetHistoryLng(String clientid);
    List<MsgDevice> GetAllInfo(String clientid);
    List<MsgDevice> GetLatestAlert();
}
