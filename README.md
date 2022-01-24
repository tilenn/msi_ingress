# msi_ingress

Simple book review app using Kubernetes and Ingress.

## Instructions
#### Clone the repository
#### Open the terminal and cd into the cloned repository 
Run ```minikube start```
Run ```minikube addons enable ingress```
and last run ```minikube tunnel```.

#### Open another terminal in the same directory
Run ```kubectl apply -f k8s``` and wait (it takes a little bit longer) until everything is up and running (use the command ```kubectl get pods``` or ```kubectl get all``` to check the status).
Once everything is running check the first terminal and go to the address specified (normally 127.0.0.1)
