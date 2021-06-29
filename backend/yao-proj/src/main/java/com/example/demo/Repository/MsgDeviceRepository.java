package com.example.demo.Repository;

import com.example.demo.Entity.MsgDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MsgDeviceRepository extends JpaRepository<MsgDevice,Integer> {
    @Query(" select count(distinct clientId) from MsgDevice ")
    int getallids();

    @Query(" select lat from MsgDevice where clientId=?1 order by id")
    List<Float> GetHistoryLat(String clientid);

    @Query(" select lng from MsgDevice where clientId=?1 order by id")
    List<Float> GetHistoryLng(String clientid);

    @Query(" select t from MsgDevice t where t.clientId=?1 order by t.id")
    List<MsgDevice> GetAllInfo(String clientid);

    @Query(" select t from MsgDevice t where t.alert=1 or t.timestamp in (select max(a.timestamp) from MsgDevice a where a.alert=1 group by a.clientId ) group by t.clientId")
    List<MsgDevice> GetLatest();
}
