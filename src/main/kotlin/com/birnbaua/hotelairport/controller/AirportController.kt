package com.birnbaua.hotelairport.controller

import com.birnbaua.hotelairport.jpa.airport.Airport
import com.birnbaua.hotelairport.jpa.airport.AirportService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest

@CrossOrigin
@RestController
@RequestMapping("/api/airport")
class AirportController @Autowired constructor(service: AirportService) : AbstractController<Airport, String>(service,AirportController::class.qualifiedName.toString()) {

    @GetMapping("/{id}")
    fun get(@PathVariable id: String, request: HttpServletRequest): ResponseEntity<Airport> {
        return super.get(id)
    }

    @GetMapping
    fun getAll(request: HttpServletRequest): ResponseEntity<List<Airport>> {
        return super.getAll()
    }

    @PostMapping
    fun post(@RequestBody entity: Airport, request: HttpServletRequest): ResponseEntity<Airport> {
        return super.post(entity)
    }

    @PutMapping("/{id}")
    fun put(@PathVariable id: String, @RequestBody entity: Airport, request: HttpServletRequest): ResponseEntity<Airport> {
        entity.icao = id
        return super.put(entity)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: String, request: HttpServletRequest): ResponseEntity<Airport> {
        return super.delete(id)
    }

    @DeleteMapping
    fun deleteAll(request: HttpServletRequest): ResponseEntity<List<Airport>> {
        return super.deleteAll()
    }

}