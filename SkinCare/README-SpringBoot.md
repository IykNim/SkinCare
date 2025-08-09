# SkinCare Spring Boot Web Application

This is a Spring Boot wrapper for your existing SkinCare frontend application. All your original files (HTML, CSS, TypeScript, JavaScript, images) remain unchanged and are served by the Spring Boot server.

## 🚀 Quick Start

### Prerequisites
- Java 17 or later
- Maven 3.6+
- Node.js 16+ (for TypeScript compilation)

### Option 1: Automatic Startup (Recommended)

**Windows:**
```bash
# Double-click or run in PowerShell/Command Prompt
start-server.bat
```

**PowerShell:**
```bash
./start-server.ps1
```

### Option 2: Manual Steps

1. **Compile TypeScript:**
   ```bash
   npm install
   npm run build
   ```

2. **Build and Run Spring Boot:**
   ```bash
   mvn clean compile
   mvn spring-boot:run
   ```

3. **Access Application:**
   Open http://localhost:8080 in your browser

## 📋 Available URLs

- **Home:** http://localhost:8080/
- **Body Shape Analysis:** http://localhost:8080/bodyShape.html
- **Color Analysis:** http://localhost:8080/colorAnalysis.html
- **Hair Test:** http://localhost:8080/hairTest.html
- **Treatments:** http://localhost:8080/treatment.html
- **Clinics:** http://localhost:8080/clinic.html
- **Bookings:** http://localhost:8080/bookingList.html
- **Login:** http://localhost:8080/Login.html
- **Sign Up:** http://localhost:8080/SignUp.html
- **Profile:** http://localhost:8080/myProfile.html

### Clean URLs (Optional)
These URLs also work and redirect to the corresponding pages:
- `/home` → `index.html`
- `/login` → `Login.html`
- `/signup` → `SignUp.html`
- `/body-shape` → `bodyShape.html`
- `/color-analysis` → `colorAnalysis.html`
- `/hair-test` → `hairTest.html`

## 🏗️ Project Structure

```
SkinCare/
├── src/main/java/com/skincare/          # Spring Boot Java code
│   ├── SkinCareWebApplication.java      # Main application class
│   ├── config/WebConfig.java            # Web configuration
│   └── controller/HomeController.java   # Request controllers
├── src/main/resources/
│   ├── static/                          # Your original files served here
│   ├── templates/                       # Thymeleaf templates (if needed)
│   └── application.properties           # Spring Boot configuration
├── *.html                               # Your original HTML files
├── *.css                                # Your original CSS files
├── *.ts, *.js                          # Your original TypeScript/JavaScript
├── Pics/                                # Your original images
├── pom.xml                              # Maven configuration
└── start-server.*                       # Startup scripts
```

## 🔧 Configuration

### Server Configuration (application.properties)
- **Port:** 8080 (change `server.port` to modify)
- **Context Path:** / (root path)
- **Static Resources:** Served from `/static/` directory
- **Cache:** 1 hour for CSS/JS, 24 hours for images

### TypeScript Compilation
- Original `tsconfig.json` is used
- Compiled files go to `dist/` directory
- Compilation happens automatically during build

## 🎯 Features

✅ **Zero Changes Required:** Your original files remain untouched  
✅ **Auto TypeScript Compilation:** Builds your TS files automatically  
✅ **Static Resource Serving:** All CSS, JS, images served efficiently  
✅ **Clean URLs:** Optional clean URL routing  
✅ **Hot Reload:** Development mode with auto-restart  
✅ **Production Ready:** Can be deployed as JAR file  

## 🚢 Deployment

### Local Development
```bash
mvn spring-boot:run
```

### Production JAR
```bash
mvn clean package
java -jar target/skincare-webapp-1.0.0.jar
```

### Docker Deployment
```dockerfile
FROM openjdk:17-jdk-slim
COPY target/skincare-webapp-1.0.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
```

## 🛠️ Troubleshooting

**Port Already in Use:**
- Change port in `application.properties`: `server.port=8081`
- Or kill process: `netstat -ano | findstr :8080`

**TypeScript Compilation Issues:**
- Run: `npm install` then `npm run build`
- Check Node.js version: `node --version` (needs 16+)

**Static Files Not Loading:**
- Check if files are copied to `src/main/resources/static/`
- Run: `mvn resources:copy-resources`

**Java Version Issues:**
- Check Java version: `java --version` (needs 17+)
- Update `java.version` in `pom.xml` if needed

## 📝 Notes

- Your original development workflow remains unchanged
- TypeScript files are compiled during Maven build
- All static assets are served with proper caching headers
- Application includes development tools for hot reload
- Browser will open automatically when using startup scripts

## 🆘 Support

If you encounter any issues:
1. Check the console output for error messages
2. Verify all prerequisites are installed
3. Ensure no other services are running on port 8080
4. Try running the manual steps to isolate the issue