# PropValuate
PropValuate is a full-stack web application that predicts real estate prices using machine learning models and provides intelligent insights through an AI-powered assistant. The platform enables users to input property details, receive accurate price predictions, and interact with a chatbot for real estate guidance.
# Features
	•	House price prediction using machine learning models such as Linear Regression, Ridge Regression, and Random Forest
	•	User authentication and authorization using JWT
	•	Dashboard for managing and viewing prediction history
	•	AI-powered chatbot for real estate assistance
	•	RESTful API architecture for efficient client-server communication
	•	Model performance comparison and insights
	•	Full CRUD functionality for user and prediction data.

# Technology Stack

Frontend:
	•	React 18
	•	Vite
	•	HTML, CSS, JavaScript

Backend:
	•	Django
	•	Django REST Framework
	•	SimpleJWT

Machine Learning:
	•	scikit-learn
	•	pandas
	•	numpy

Database:
	•	SQLite / MySQL / PostgreSQL

AI Integration:
	•	Groq API

Tools:
	•	Git
	•	GitHub

# System Architecture

The application follows a client-server architecture:
	•	The frontend handles user interaction and sends requests to the backend
	•	The backend processes requests, manages authentication, and interacts with the machine learning module
	•	The machine learning module performs predictions using trained models
	•	The chatbot module integrates with the Groq API for intelligent responses
