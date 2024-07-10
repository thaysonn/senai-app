
## Passos para executar o projeto

Para baixar o projeto:
git clone https://github.com/thaysonn/senai-app.git

Para iniciar o frontend
 - Entre na pasta frontend;
 - Execute o npm install no terminal para instalar os pacotes;
 - Para rodar o projeto execute npm start no terminal.
 - Observação: caso o backend não suba na porta 8080, favor atualizar o arquivo config.js que está na pasta frontend/src

Para iniciar o backend:
- Entre na pasta backend;
- Abra um terminal para rodar o docker do bando de dados com os seguintes comandos:
   - docker build -t mssql-custom-senai .
   - docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=!Passw0rd' -p 1433:1433 --name sql1 -d mssql-custom
- Abra um novo terminal para executar a api com o seguinte comando:
   - ./mvnw spring-boot:run  
  
