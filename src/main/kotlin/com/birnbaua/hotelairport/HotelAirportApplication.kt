package com.birnbaua.hotelairport

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@EnableJpaRepositories
@SpringBootApplication
public class HotelAirportApplication

fun main(args: Array<String>) {
    runApplication<HotelAirportApplication>(*args)
}
