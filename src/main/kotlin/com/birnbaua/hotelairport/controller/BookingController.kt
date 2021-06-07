package com.birnbaua.hotelairport.controller

import com.birnbaua.hotelairport.jpa.route.Route
import com.birnbaua.hotelairport.jpa.route.RouteService
import com.birnbaua.hotelairport.jpa.route.booking.Booking
import com.birnbaua.hotelairport.jpa.route.booking.BookingService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.sql.Timestamp
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/booking")
class BookingController @Autowired constructor(val serv: BookingService) : AbstractController<Booking, Int>(serv,BookingController::class.qualifiedName.toString()) {

    @GetMapping("/{id}")
    fun get(@PathVariable id: Int, request: HttpServletRequest): ResponseEntity<Booking> {
        return super.get(id)
    }

    @GetMapping
    fun getAll(request: HttpServletRequest): ResponseEntity<List<Booking>> {
       return super.getAll()
    }

    @PostMapping
    fun post(entity: Booking, request: HttpServletRequest): ResponseEntity<Booking> {
        return super.post(entity)
    }

    @PutMapping("/{id}")
    fun put(@PathVariable id: Int, entity: Booking, request: HttpServletRequest): ResponseEntity<Booking> {
        entity.id = id
        return super.put(entity)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Int, request: HttpServletRequest): ResponseEntity<Booking> {
        return super.delete(id)
    }

    @DeleteMapping
    fun deleteAll(request: HttpServletRequest): ResponseEntity<List<Booking>> {
        return super.deleteAll()
    }

}