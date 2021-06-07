package com.birnbaua.hotelairport.controller

import com.birnbaua.hotelairport.jpa.route.Route
import com.birnbaua.hotelairport.jpa.route.RouteService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.sql.Timestamp
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/route")
class RouteController @Autowired constructor(val serv: RouteService) : AbstractController<Route, Int>(serv,RouteController::class.qualifiedName.toString()) {


    @GetMapping("/{id}")
    fun get(@PathVariable id: Int, request: HttpServletRequest): ResponseEntity<Route> {
        return super.get(id)
    }

    @GetMapping
    fun getAll(@RequestParam(required = false) available: Boolean?, @RequestParam(required = false) hotel: Int?, @RequestParam(required = false) airport: String?,
               @RequestParam(required = false) time: Long?, @RequestParam(required = false) passengers: Int?, request: HttpServletRequest): ResponseEntity<List<Route>> {
        if(available != null) {
            return try {
                if(time != null && hotel != null && passengers != null && airport != null) {
                    ResponseEntity.ok()
                        .header("Route","All available routes for given params")
                        .body(serv.findAvaliableRoutes(Timestamp(time),passengers,hotel,airport))
                } else {
                    ResponseEntity.badRequest().header("Route","Missing parameters").build()
                }
            } catch(e: Exception) {
                ResponseEntity.badRequest().header("Route",e.message).build()
            }
        }
        return super.getAll()
    }

    @PostMapping
    fun post(entity: Route, request: HttpServletRequest): ResponseEntity<Route> {
        return super.post(entity)
    }

    @PutMapping("/{id}")
    fun put(@PathVariable id: Int, entity: Route, request: HttpServletRequest): ResponseEntity<Route> {
        entity.id = id
        return super.put(entity)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id: Int, request: HttpServletRequest): ResponseEntity<Route> {
        return super.delete(id)
    }

    @DeleteMapping
    fun deleteAll(request: HttpServletRequest): ResponseEntity<List<Route>> {
        return super.deleteAll()
    }
}
