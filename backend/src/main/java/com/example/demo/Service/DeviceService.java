package com.example.demo.Service;
import java.util.List;
import com.example.demo.Entity.Device;

public interface DeviceService {
    int Create(String clientId,String name,String description);
    int Modify(String clientId,String name);
    int Delete(String clientId);
    List<Device> ShowAllDevice();
}
