package com.birnbaua.hotelairport.jpa.route

import com.birnbaua.hotelairport.jpa.airport.Airport
import com.birnbaua.hotelairport.jpa.hotel.Hotel
import com.birnbaua.hotelairport.jpa.service.JpaService
import com.birnbaua.hotelairport.jpa.vehicle.Vehicle
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Service
import java.sql.Time
import java.sql.Timestamp
import javax.persistence.*

@Entity
@Table(name = "`route`", uniqueConstraints = [UniqueConstraint(columnNames = ["airport","hotel","vehicle"])])
data class Route(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = 0,

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "airport", referencedColumnName = "icao_code")
    var airport: Airport?,

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "hotel", referencedColumnName = "id")
    var hotel: Hotel?,

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "vehicle", referencedColumnName = "`vehicle_no`")
    var vehicle: Vehicle?,

    @Column(name = "`price`", nullable = false)
    var price: Double = 0.0,

    //one sided
    @Column(name = "route_duration")
    var duration: Time?
)

interface RouteRepository : JpaRepository<Route, Int?> {

    @Query("SELECT r FROM Route r JOIN Booking b ON r.id=b.route.id " +
            "WHERE r.vehicle.noOfSeats > ?2 AND r.hotel.id = ?3 AND r.airport.icao = ?4 " +
            "AND NOT (b.start <= ?1 AND b.end >= ?1)")
    fun findAvailableRoutes(timestamp: Timestamp, passengers: Int, hotel: Int, airport: String): List<Route>
}

@Service
class RouteService @Autowired constructor(val rr: RouteRepository) : JpaService<Route, Int?>(rr) {

    fun findAvaliableRoutes(timestamp: Timestamp, passengers: Int, hotel: Int, airport: String): List<Route> {
        return rr.findAvailableRoutes(timestamp, passengers, hotel, airport)
    }
}
