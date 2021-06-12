package com.birnbaua.hotelairport.controller

import com.birnbaua.hotelairport.jpa.driver.Driver
import com.birnbaua.hotelairport.jpa.driver.DriverService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletRequest

@CrossOrigin
@RestController
@RequestMapping("/api/driver")
class DriverController @Autowired constructor(service: DriverService) : AbstractController<Driver, String>(service,DriverController::class.qualifiedName.toString()) {

    @GetMapping("/{id}")
    fun get(@PathVariable id: String, request: HttpServletRequest): ResponseEntity<Driver> {
        return super.get(id)
    }

    @GetMapping
    fun getAll(request: HttpServletRequest): ResponseEntity<List<Driver>> {
        return super.getAll()
    }

    @PostMapping
    fun post(@RequestBody entity: Driver, request: HttpServletRequest): ResponseEntity<Driver> {
        return super.post(entity)
    }

    @PutMapping("/{id}")
    fun put(@PathVariable id: String, @RequestBody entity: Driver, request: HttpServletRequest): ResponseEntity<Driver> {
        entity.pin = id
        return super.put(entity)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: String, request: HttpServletRequest): ResponseEntity<Driver> {
        return super.delete(id)
    }

    @DeleteMapping
    fun deleteAll(request: HttpServletRequest): ResponseEntity<List<Driver>> {
        return super.deleteAll()
    }
}