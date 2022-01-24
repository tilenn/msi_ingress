# msi_ingress

Simple book review app using Kubernetes and Ingress. It uses React for the frontend, Express for backend and Mongo for database. There is another Express server build with multi-stage builds to satifsy the task for grading.

## Instructions
#### Clone the repository
#### Open the terminal and cd into the cloned repository 
Run ```minikube start```
Run ```minikube addons enable ingress```
and last run ```minikube tunnel```.

#### Open another terminal in the same directory
Run ```kubectl apply -f k8s``` and wait (it takes a little bit longer) until everything is up and running (use the command ```kubectl get pods``` or ```kubectl get all``` to check the status).

![Untitled](https://user-images.githubusercontent.com/79167500/150871494-05f64025-a419-458d-8dd3-b21e5ffe595d.png)

Once everything is running check the first terminal and go to the address specified (normally 127.0.0.1)

![appeng](https://user-images.githubusercontent.com/79167500/150871984-07c17dfa-0180-47e8-893d-4adf3dc0a39b.png)

Running ```kubectl apply -f k8s2``` updates the site(blue/green update)

![slo](https://user-images.githubusercontent.com/79167500/150872144-e68e03c7-2002-4ece-a286-03c4443f0ab5.png)

On path ```/multistage``` there is a Express server built with multi-stage builds. 
