package com.example.demo.Dao;

import com.example.demo.Entity.Device;
import com.example.demo.Entity.User;
import java.util.List;

public interface DeviceDao {
    List<Device> ShowAllDevice();
    Device saveDevice(Device device);
    Device findByclientId(String clientId);
    void deleteDevice(Device device);
}
