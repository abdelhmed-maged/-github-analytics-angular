# GithubAnalyticsAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.
1. [Environment Setup](#native-setup)
1. [Development Server](#development-server)
1. [Code Scaffolding](#code-scaffolding)
1. [Build](#build)
1. [Testing](#testing)
1. [Project Setup](#project-setup)

## Environment Setup

- Follow instruction for running angular development server.
- Install nvm by following [nvm instructions](https://github.com/creationix/nvm)
- Run `nvm use`
- Run `npm install -g @angular/cli`
- Run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
When generating a new top level module ensure that modules are **not** added to any parent modules. All modules should contain their own routing and style component.
New modules should bcontrie lazy loaded via routes.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Testing

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, this will lunch cypress electron browser, video and screenshots are disabled.

## Project Setup

- `src` - application root
  - `app` - application code
    - `api` - api services for http calls to api.github
    - `component` - common components
    - `services` - facade services for api
  - `assets` - static assets
