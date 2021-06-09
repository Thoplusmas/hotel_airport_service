package com.birnbaua.hotelairport.controller

import com.birnbaua.hotelairport.jpa.hotel.Hotel
import com.birnbaua.hotelairport.jpa.hotel.HotelService
import com.birnbaua.hotelairport.jpa.vehicle.Vehicle
import com.birnbaua.hotelairport.jpa.vehicle.VehicleService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/vehicle")
class VehicleController @Autowired constructor(service: VehicleService) : AbstractController<Vehicle, Int>(service,VehicleController::class.qualifiedName.toString()) {

    @GetMapping("/{id}")
    fun get(@PathVariable id: Int, request: HttpServletRequest): ResponseEntity<Vehicle> {
        return super.get(id)
    }

    @GetMapping
    fun getAll(request: HttpServletRequest): ResponseEntity<List<Vehicle>> {
        return super.getAll()
    }

    @PostMapping
    fun post(@RequestBody entity: Vehicle, request: HttpServletRequest): ResponseEntity<Vehicle> {
        return super.post(entity)
    }

    @PutMapping("/{id}")
    fun put(@PathVariable id: Int, @RequestBody entity: Vehicle, request: HttpServletRequest): ResponseEntity<Vehicle> {
        entity.no = id
        return super.put(entity)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Int, request: HttpServletRequest): ResponseEntity<Vehicle> {
        return super.delete(id)
    }

    @DeleteMapping
    fun deleteAll(request: HttpServletRequest): ResponseEntity<List<Vehicle>> {
        return super.deleteAll()
    }
}