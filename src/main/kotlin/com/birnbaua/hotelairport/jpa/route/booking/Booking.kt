package com.birnbaua.hotelairport.jpa.route.booking

import com.birnbaua.hotelairport.jpa.route.Route
import com.birnbaua.hotelairport.jpa.service.JpaService
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Service
import java.sql.Timestamp
import javax.persistence.*

@Entity
@Table(name = "`booking`")
data class Booking(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    var id: Int,

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "route", referencedColumnName = "id")
    var route: Route,

    @Column(name = "start_of_tour")
    var start: Timestamp,

    @Column(name = "end_of_tour")
    var end: Timestamp,

    @Column(name = "passengers")
    var passengers: Int

)

interface BookingRepository : JpaRepository<Booking, Int>

@Service
class BookingService @Autowired constructor(repository: BookingRepository) : JpaService<Booking, Int>(repository)