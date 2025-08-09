@echo off
echo Installing Maven for SkinCare Spring Boot...
echo.

REM Create Maven directory
if not exist "maven" mkdir maven

REM Download Maven
echo Downloading Maven...
powershell -Command "Invoke-WebRequest -Uri 'https://archive.apache.org/dist/maven/maven-3/3.9.5/binaries/apache-maven-3.9.5-bin.zip' -OutFile 'maven.zip'"

if not exist "maven.zip" (
    echo Failed to download Maven. Trying alternative...
    powershell -Command "Invoke-WebRequest -Uri 'https://mirrors.estointernet.in/apache/maven/maven-3/3.9.5/binaries/apache-maven-3.9.5-bin.zip' -OutFile 'maven.zip'"
)

if exist "maven.zip" (
    echo Extracting Maven...
    powershell -Command "Expand-Archive -Path 'maven.zip' -DestinationPath '.' -Force"
    
    if exist "apache-maven-3.9.5" (
        move "apache-maven-3.9.5\*" "maven\" >nul 2>&1
        rmdir "apache-maven-3.9.5" /s /q >nul 2>&1
        del "maven.zip" >nul 2>&1
        echo Maven installed successfully!
        
        REM Set MAVEN_HOME for this session
        set MAVEN_HOME=%cd%\maven
        set PATH=%MAVEN_HOME%\bin;%PATH%
        
        echo Testing Maven...
        maven\bin\mvn --version
    ) else (
        echo Error extracting Maven
        exit /b 1
    )
) else (
    echo Failed to download Maven from all mirrors
    echo Please install Maven manually from: https://maven.apache.org/download.cgi
    exit /b 1
)

echo.
echo Maven setup complete!