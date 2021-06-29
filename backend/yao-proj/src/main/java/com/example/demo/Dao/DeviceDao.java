package com.example.demo.Dao;

import com.example.demo.Entity.Device;
import com.example.demo.Entity.User;

public interface DeviceDao {
    Device saveDevice(Device device);
    Device findByclientId(String clientId);
    void deleteDevice(Device device);
}
