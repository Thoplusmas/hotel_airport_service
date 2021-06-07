package com.birnbaua.hotelairport.jpa.driver

import com.birnbaua.hotelairport.jpa.service.JpaService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Service
import javax.persistence.*

@Entity
@Table(name = "driver")
data class Driver(

    @Id
    @Column(name = "pin")
    var pin: String,

    @Column(name = "first_name")
    var firstName: String,

    @Column(name = "last_name")
    var lastName: String

)

interface DriverRepository : JpaRepository<Driver, String>

@Service
class DriverService @Autowired constructor(repository: DriverRepository) : JpaService<Driver, String>(repository)
