# SLD Generator

A web app that creates single line diagrams (SLDs) for solar PV installations.

**Live demo:** https://sldgenerator.vercel.app/

## What it does

Installers enter the details of a system (PV modules, inverter, battery, customer and installer) and the app generates a single line diagram ready to download as a PDF.

1. Fill in the system details
2. Review the summary
3. Generate the drawing
4. Download it as a PDF

Current version supports single-phase systems with one inverter and two strings.

## Roadmap

- **User accounts:** installers log in to their own dashboard
- **Projects:** create a new project, fill in the details, and download the drawing
- **Saved projects:** every project is saved, so it can be opened, edited and downloaded again later
- **More templates:** three-phase inverters, more strings, multiple batteries
- **String calculator:** Calculate minimum and maximum quantity of pv modules allowed per string

## Built with

React, Vite, jsPDF, svg2pdf.js

## Run it locally

    npm install
    npm run dev

## Note

This is a demo project. Please don't enter real customer data.
