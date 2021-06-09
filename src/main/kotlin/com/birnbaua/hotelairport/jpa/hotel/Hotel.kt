package com.birnbaua.hotelairport.jpa.hotel

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
@Table(name = "hotel")
data class Hotel(

    @Id
    @Column(name = "id")
    var id: Int,

    @Max(64)
    @Column(name = "`name`", unique = true, length = 64)
    var name: String,

    @Column(name = "`desc`")
    var desc: String
)

interface HotelRepository : JpaRepository<Hotel, Int?>

@Service
class HotelService @Autowired constructor(repository: HotelRepository) : JpaService<Hotel, Int?>(repository)