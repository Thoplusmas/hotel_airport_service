package com.birnbaua.hotelairport.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import javax.servlet.http.HttpServletRequest

interface MyController<T,ID> {

    fun get(@PathVariable id: ID, request: HttpServletRequest): ResponseEntity<T>
    fun getAll(request: HttpServletRequest): ResponseEntity<List<T>>
    fun post(entity: T, request: HttpServletRequest): ResponseEntity<T>
    fun put(@PathVariable id: ID, entity: T, request: HttpServletRequest): ResponseEntity<T>
    fun delete(@PathVariable id: ID, request: HttpServletRequest): ResponseEntity<T>
    fun deleteAll(request: HttpServletRequest): ResponseEntity<List<T>>

}