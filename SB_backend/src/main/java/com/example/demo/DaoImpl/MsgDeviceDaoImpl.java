package com.example.demo.DaoImpl;

import com.example.demo.Dao.MsgDeviceDao;
import com.example.demo.Entity.MsgDevice;
import com.example.demo.Repository.MsgDeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class MsgDeviceDaoImpl implements MsgDeviceDao {
    @Autowired
    private MsgDeviceRepository msgdeviceRepository;

    @Override
    public int GetDeviceAmount(){
        return msgdeviceRepository.getallids();
    }

    @Override
    public int GetTotalAmount(){
        return (int)msgdeviceRepository.count();
    }

    @Override
    public List<Double> GetHistoryLat(String clientid){
        return msgdeviceRepository.GetHistoryLat(clientid);
    }

    @Override
    public List<Double> GetHistoryLng(String clientid){
        return msgdeviceRepository.GetHistoryLng(clientid);
    }

    @Override
    public List<MsgDevice> GetAllInfo(String clientid){
        return msgdeviceRepository.GetAllInfo(clientid);
    }

    @Override
    public List<MsgDevice> GetLatestAlert(){
        return msgdeviceRepository.GetLatest();
    }
}
