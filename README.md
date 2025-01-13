# Mono POS Starter Kit

This is a starter kit for a POS (Point of Sale) system built with TypeScript, Vue.js, and Express. It includes a frontend and backend setup with Docker, ready for development.

## Features
- **Frontend**: Vue.js with TypeScript
- **Backend**: Express.js with TypeScript
- **Docker**: Containerized setup for easy development environment setup
- **Vue Router**: For page navigation

## Getting Started

To get started, clone this repository and follow these steps:

### Prerequisites
Ensure you have the following installed:
- Docker
- Node.js (optional, but required if you prefer running locally without Docker)

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/mono-pos-ts.git
    cd mono-pos-ts
    ```

2. Build and run with Docker:
    ```bash
    docker-compose up --build
    ```

   This will start both the frontend and backend in Docker containers.

### Development

To run in development mode:

- Backend (Express) will be available at `http://localhost:3000`
- Frontend (Vue) will be available at `http://localhost:8080`

### Running Tests

You can add tests to your project using your preferred testing framework and run them with Docker.

