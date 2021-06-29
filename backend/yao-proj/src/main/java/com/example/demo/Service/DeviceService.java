package com.example.demo.Service;

public interface DeviceService {
    int Create(String clientId,String name,String description);
    int Modify(String clientId,String name);
    int Delete(String clientId);
}
