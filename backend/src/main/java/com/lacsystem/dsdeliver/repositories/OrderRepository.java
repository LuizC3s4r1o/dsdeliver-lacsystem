package com.lacsystem.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lacsystem.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
