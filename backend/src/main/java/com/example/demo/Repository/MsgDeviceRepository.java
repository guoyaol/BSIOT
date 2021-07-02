package com.example.demo.Repository;

import com.example.demo.Entity.MsgDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MsgDeviceRepository extends JpaRepository<MsgDevice,Integer> {
    @Query(" select count(distinct clientId) from MsgDevice ")
    int getallids();

    @Query(" select lat from MsgDevice where clientId=?1 order by id")
    List<Double> GetHistoryLat(String clientid);

    @Query(" select lng from MsgDevice where clientId=?1 order by id")
    List<Double> GetHistoryLng(String clientid);

    @Query(" select t from MsgDevice t order by t.id")
    List<MsgDevice> GetAllInfo();

    //@Query(" select t from MsgDevice t where t.alert=1 or t.timestamp in (select max(a.timestamp) from MsgDevice a where a.alert=1 group by a.clientId ) group by t.clientId")
    @Query(" select t from MsgDevice t where (t.timestamp,t.clientId) in (select max(a.timestamp),a.clientId from MsgDevice a group by a.clientId) order by t.clientId")
    List<MsgDevice> GetLatest();
}
/*
select * from msg_device t
where (t.timestamp,t.clientid) in 
(select max(a.timestamp),a.clientid
from msg_device a 
group by a.clientid);
*/

/*
select t from MsgDevice t where (t.timestamp,t.clientId) in (select max(a.timestamp),a.clientId from MsgDevice a group by a.clientId)
*/
