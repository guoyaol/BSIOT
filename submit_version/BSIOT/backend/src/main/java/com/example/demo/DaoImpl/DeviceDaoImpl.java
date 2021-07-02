package com.example.demo.DaoImpl;

import com.example.demo.Dao.DeviceDao;
import com.example.demo.Entity.Device;
import com.example.demo.Entity.User;
import com.example.demo.Repository.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class DeviceDaoImpl implements DeviceDao {
    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public List<Device> ShowAllDevice(){
        return deviceRepository.ShowAllDevice();
    }

    @Override
    public Device saveDevice(Device device){
        return deviceRepository.saveAndFlush(device);
    }

    @Override
    public Device findByclientId(String clientId){
        return deviceRepository.findByclientId(clientId);
    }

    @Override
    public void deleteDevice(Device device){
        deviceRepository.delete(device);
    }
}
