package com.birnbaua.hotelairport.jpa.airport

import com.birnbaua.hotelairport.jpa.service.JpaService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Service
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table
import javax.validation.constraints.Max

@Entity
@Table(name = "airport")
data class Airport(

    @Id
    @Max(4)
    @Column(name = "icao_code", length = 4)
    var icao: String,

    @Column(name = "`name`")
    var name: String,

    @Column(name = "`desc`")
    var desc: String
)

interface AirportRepository : JpaRepository<Airport, String>

@Service
class AirportService @Autowired constructor(repository: AirportRepository) : JpaService<Airport, String>(repository)
