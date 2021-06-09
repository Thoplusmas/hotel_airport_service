package com.birnbaua.hotelairport.jpa.vehicle

import com.birnbaua.hotelairport.jpa.airport.Airport
import com.birnbaua.hotelairport.jpa.driver.Driver
import com.birnbaua.hotelairport.jpa.service.JpaService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Service
import javax.persistence.*
import javax.validation.constraints.Min

@Entity
@Table(name = "vehicle")
data class Vehicle(

    @Id
    @Column(name = "vehicle_no")
    var no: Int?,

    @Min(2)
    @Column(name = "no_of_seats")
    var noOfSeats: Int? = 5,

    @Column(name = "is_available")
    var isAvailable: Boolean = true,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "airport", referencedColumnName = "icao_code")
    var airport: Airport?,

    @ManyToOne
    @JoinColumn(name = "driver", referencedColumnName = "pin")
    var driver: Driver?


)

interface VehicleRepository : JpaRepository<Vehicle, Int>

@Service
class VehicleService @Autowired constructor(repository: VehicleRepository) : JpaService<Vehicle, Int>(repository)