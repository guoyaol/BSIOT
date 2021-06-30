package com.example.demo.ServiceImpl;

import com.example.demo.Dao.MsgDeviceDao;
import com.example.demo.Entity.Device;
import com.example.demo.Entity.MsgDevice;
import com.example.demo.Service.MsgDeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MsgDeviceServiceImpl implements MsgDeviceService{
    @Autowired
    private MsgDeviceDao msgdeviceDao;

    @Override
    public int GetDeviceAmount(){
        return msgdeviceDao.GetDeviceAmount();
    }

    @Override
    public int GetTotalAmount(){
        return msgdeviceDao.GetTotalAmount();
    }

    @Override
    public List<Double> GetHistoryLat(String clientid){
        return msgdeviceDao.GetHistoryLat(clientid);
    }

    @Override
    public List<Double> GetHistoryLng(String clientid){
        return msgdeviceDao.GetHistoryLng(clientid);
    }

    @Override
    public List<MsgDevice> GetAllInfo(String clientid){
        return msgdeviceDao.GetAllInfo(clientid);
    }

    @Override
    public List<MsgDevice> GetLatestAlert(){
        return msgdeviceDao.GetLatestAlert();
    }
}
