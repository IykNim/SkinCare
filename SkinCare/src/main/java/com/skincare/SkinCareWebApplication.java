package com.skincare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class SkinCareWebApplication {

    public static void main(String[] args) {
        System.setProperty("server.port", "8085");
        System.out.println("🌟 Starting SkinCare Spring Boot Application...");
        System.out.println("📂 Serving static files from: src/main/resources/static/");
        System.out.println("🌐 Application will be available at: http://localhost:8085");
        System.out.println("");
        
        SpringApplication.run(SkinCareWebApplication.class, args);
        
        System.out.println("");
        System.out.println("✅ SkinCare Application Started Successfully!");
        System.out.println("🔗 Access your application at: http://localhost:8085");
        System.out.println("⚠️  Press Ctrl+C to stop the server");
    }
    
    @RestController
    public static class ApiController {
        
        @GetMapping("/api/status")
        public String status() {
            return "{\"status\":\"UP\",\"message\":\"SkinCare Spring Boot Application is running\"}";
        }
    }
}