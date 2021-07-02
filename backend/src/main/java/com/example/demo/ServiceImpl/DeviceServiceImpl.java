package com.example.demo.ServiceImpl;

import com.example.demo.Dao.DeviceDao;
import com.example.demo.Entity.Device;
import com.example.demo.Service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DeviceServiceImpl implements DeviceService{
    @Autowired
    private DeviceDao deviceDao;

    @Override
    public List<Device> ShowAllDevice(){
        return deviceDao.ShowAllDevice();
    }

    @Override
    public int Create(String clientId,String name,String description){
        Device device = deviceDao.findByclientId(clientId);
        if(device==null)
        {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

            Device newdevice = new Device();
            newdevice.setClientId(clientId);
            newdevice.setName(name);
            newdevice.setDescription(description);
            return  deviceDao.saveDevice(newdevice).getId();
        }
        else{
            return 0;
        }
    }

    @Override
    public int Modify(String clientId,String name){
        Device device = deviceDao.findByclientId(clientId);
        if(device!=null)
        {
            device.setName(name);
            return  deviceDao.saveDevice(device).getId();
        }
        else{
            return 0;
        }
    }

    @Override
    public int Delete(String clientId){
        Device device = deviceDao.findByclientId(clientId);
        if(device!=null){
            int id=device.getId();
            deviceDao.deleteDevice(device);
            return  id;
        }
        return 0;
    }

}
