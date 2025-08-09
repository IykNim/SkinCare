# Standalone Apache Tomcat Setup Guide

## Option 1: Download and Install Tomcat Manually

### Step 1: Download Tomcat
1. Go to https://tomcat.apache.org/download-10.cgi
2. Download "32-bit/64-bit Windows Service Installer" (.exe file)
3. Or download ZIP file for manual setup

### Step 2: Install Tomcat
- **Using Installer:** Run the .exe and follow installation steps
- **Using ZIP:** Extract to `C:\apache-tomcat-10.x.x`

### Step 3: Configure Tomcat
1. Set environment variables:
   - `CATALINA_HOME`: Path to Tomcat installation
   - `JAVA_HOME`: Path to Java installation
2. Edit `conf/server.xml` to change port from 8080 to 8085:
   ```xml
   <Connector port="8085" protocol="HTTP/1.1" />
   ```

### Step 4: Deploy Your Application as WAR
1. Build WAR file:
   ```powershell
   mvn clean package
   ```
2. Copy `target/skincare-webapp-1.0.0.war` to Tomcat's `webapps/` folder
3. Start Tomcat:
   ```powershell
   # Windows Service
   net start Tomcat10
   
   # Or manually
   %CATALINA_HOME%\bin\startup.bat
   ```

## Option 2: Use Current Embedded Tomcat (Recommended)

Your current setup is **already using Apache Tomcat** - it's just embedded within Spring Boot. This approach is:
- ✅ Easier to manage
- ✅ Automatic configuration
- ✅ Better for development
- ✅ Industry standard for Spring Boot apps

### Current Working Commands:
```powershell
# Navigate to project
Set-Location "e:\_MTT Personal Docs\Projects\SkinCare-main\SkinCare-main\SkinCare"

# Set Maven path
$env:PATH = "C:\Users\user\skincare-tools\maven\bin;$env:PATH"

# Run application (embedded Tomcat)
mvn spring-boot:run
```

### Application URLs:
- Main: http://localhost:8085
- Health: http://localhost:8085/health
- API Status: http://localhost:8085/api/status
- Static files: http://localhost:8085/*.html

---

**Recommendation:** Stick with the current embedded Tomcat setup unless you have specific requirements for standalone Tomcat.