package com.example.demo.Repository;

import com.example.demo.Entity.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DeviceRepository extends JpaRepository<Device,Integer> {
    Device findByclientId(String clientId);

    @Query(" select t from Device t order by t.id")
    List<Device> ShowAllDevice();
}
