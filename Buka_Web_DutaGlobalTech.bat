@echo off
title DutaGlobalTech.com - Web Server Launcher
echo ========================================================
echo         MEMBUKA WEBSITE DUTAGLOBALTECH.COM
echo   Jasa Website, Sistem ERP, & Produk Digital Enterprise
echo ========================================================
echo.
cd /d "%~dp0"
if not exist "node_modules" (
    echo Menginstal modul dependensi...
    call npm install
)
echo Menjalankan Web Server DutaGlobalTech...
start http://localhost:3000
npm run dev
pause
