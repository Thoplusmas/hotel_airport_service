package com.birnbaua.hotelairport.controller

import com.birnbaua.hotelairport.jpa.airport.Airport
import com.birnbaua.hotelairport.jpa.airport.AirportService
import com.birnbaua.hotelairport.jpa.driver.Driver
import com.birnbaua.hotelairport.jpa.driver.DriverService
import com.birnbaua.hotelairport.jpa.hotel.Hotel
import com.birnbaua.hotelairport.jpa.hotel.HotelService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/hotel")
class HotelController @Autowired constructor(service: HotelService) : AbstractController<Hotel, Int>(service,HotelController::class.qualifiedName.toString()) {
    @GetMapping("/{id}")
    fun get(@PathVariable id: Int, request: HttpServletRequest): ResponseEntity<Hotel> {
        return super.get(id)
    }

    @GetMapping
    fun getAll(request: HttpServletRequest): ResponseEntity<List<Hotel>> {
        return super.getAll()
    }

    @PostMapping
    fun post(entity: Hotel, request: HttpServletRequest): ResponseEntity<Hotel> {
        return super.post(entity)
    }

    @PutMapping("/{id}")
    fun put(@PathVariable id: Int, entity: Hotel, request: HttpServletRequest): ResponseEntity<Hotel> {
        entity.id = id
        return super.put(entity)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Int, request: HttpServletRequest): ResponseEntity<Hotel> {
        return super.delete(id)
    }

    @DeleteMapping
    fun deleteAll(request: HttpServletRequest): ResponseEntity<List<Hotel>> {
        return super.deleteAll()
    }
}