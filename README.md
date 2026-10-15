# SLD Generator

A web app that creates single line diagrams (SLDs) for solar PV installations.

**Live demo:** https://sldgenerator.vercel.app/

## What it does

Installers enter the details of a system (PV modules, inverter, battery, customer and installer) and the app generates a single line diagram ready to download as a PDF.

1. Start a new project from the dashboard
2. Fill in the system details
3. Generate the drawing
4. Download it as a PDF, or save the project to edit later

Current version supports single-phase systems with one inverter and two strings.

## Features

- **Dashboard** listing all saved projects
- **Create, edit and delete projects**
- **Automatic string split:** modules are divided evenly across the two strings
- **Drawing generated from an SVG template** drawn in AutoCAD, filled with the project details
- **PDF export** in A3, named after the customer
- **Projects saved in the browser** (localStorage), so they stay after a refresh

## Roadmap

- **Backend:** save projects to a database with an Express API instead of the browser
- **User accounts:** installers log in to their own dashboard
- **More templates:** three-phase inverters, more strings, multiple batteries
- **String calculator:** calculate the minimum and maximum number of PV modules allowed per string

## Built with

React, React Router, Vite, jsPDF, svg2pdf.js

## Run it locally

    npm install
    npm run dev

## Note

This is a demo project. Projects are stored only in your browser. Please don't enter real customer data.
