package com.birnbaua.hotelairport.controller

import com.birnbaua.hotelairport.jpa.service.JpaService
import org.apache.commons.logging.Log
import org.apache.commons.logging.LogFactory
import org.apache.coyote.Response
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import javax.servlet.http.HttpServletRequest

abstract class AbstractController<T: Any,ID: Any?> (val service: JpaService<T,ID>, val clazz: String) {

    private val log: Log = LogFactory.getLog(clazz)

    fun get(id: ID): ResponseEntity<T> {
        var entity: T
        try {
           entity = service.getById(id)
        } catch(e: Exception) {
            log.error("Error for resource with id")
            log.error(e.message)
            return ResponseEntity.notFound().header(clazz,e.message).build()
        }
        return ResponseEntity.ok().header(clazz,"Resource with id: $id").body(entity)
    }

    fun getAll(): ResponseEntity<List<T>> {
        var entities: List<T>
        try {
            entities = service.findAll()
        } catch(e: Exception) {
            log.error("Something went wrong while fetching resources")
            log.error(e.message)
            return ResponseEntity.badRequest().header(clazz,e.message).build()
        }
        return ResponseEntity.ok().header(clazz,"All resources").body(entities)
    }

    fun post(entity: T): ResponseEntity<T> {
        var savedEntity: T
        try {
            savedEntity = service.save(entity)
        } catch(e: Exception) {
            log.error("Something went wrong while creating/editing the resource")
            log.error(e.message)
            return ResponseEntity.badRequest().header(clazz,e.message).build()
        }
        return ResponseEntity.status(HttpStatus.CREATED).header(clazz,"Successfully created/edited resource").body(savedEntity)
    }

    fun put(entity: T): ResponseEntity<T> {
        return post(entity)
    }

    fun delete(id: ID): ResponseEntity<T> {
        try {
            service.deleteById(id)
        } catch (e: Exception) {
            log.error("Something went wrong while deleting the resource with id: $id")
            log.error(e.message)
            return ResponseEntity.badRequest().header(clazz,e.message).build()
        }
        return ResponseEntity.noContent().header(clazz,"Successfully deleted resource with id: $id").build()
    }

    fun deleteAll(ids: MutableList<ID>): ResponseEntity<List<T>> {
        try {
            service.deleteAllById(ids)
        } catch (e: Exception) {
            log.error("Something went wrong while deleting all resources")
            log.error(e.message)
            return ResponseEntity.badRequest().header(clazz,e.message).build()
        }
        return ResponseEntity.noContent().header(clazz,"Successfully deleted all resources").build()
    }

    fun deleteAll(): ResponseEntity<List<T>> {
        try {
            service.deleteAll()
        } catch (e: Exception) {
            log.error("Something went wrong while deleting all resources")
            log.error(e.message)
            return ResponseEntity.badRequest().header(clazz,e.message).build()
        }
        return ResponseEntity.noContent().header(clazz,"Successfully deleted all resources").build()
    }

    /*
    abstract fun getEntity(id: ID, request: HttpServletRequest) : ResponseEntity<T>
    abstract fun getAllEntities(request: HttpServletRequest) : ResponseEntity<List<T>>
    abstract fun postEntity(entity: T, request: HttpServletRequest) : ResponseEntity<T>
    abstract fun putEntity(id: ID, entity: T, request: HttpServletRequest) : ResponseEntity<T>
    abstract fun deleteEntity(id: ID, request: HttpServletRequest) : ResponseEntity<T>
    abstract fun deleteAllEntities(request: HttpServletRequest) : ResponseEntity<T>
    */
}