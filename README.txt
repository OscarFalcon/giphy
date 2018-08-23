

cd code-challenge-app
npm run webpack
cp build/* ../code-challenge-svc/configuration/welcome-content/
cd ../code-challenge-svc/code-challengeAPI
./gradlew clean build
docker-compose up -build

localhost:8080

