package com.example.demo.Repository;

import com.example.demo.Entity.Device;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceRepository extends JpaRepository<Device,Integer> {
    Device findByclientId(String clientId);
}
