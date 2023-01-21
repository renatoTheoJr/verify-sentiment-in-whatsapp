# Projeto Opus software
## Descrição
O projeto consiste em um chatbot via whatsapp que será analisado o sentimento do usuário, e dependendo da resposta receberá uma mensagem.   

## Tecnologias 
Para a conversa via whatsapp será utilizado twillio  
As conexões será feitas em nodeJs   
A conversa será salvo em um banco de dados, cada um com um protocolo (UUID)  
O chatbot será feito em python3, a príncipio será usado Pyspark para o tratamento dos dados, e algum modelo de treinamento (DecisionTreeClassifier).   
A base de dados (Twitter, Kagle)    

## Modelo de organização    
![Opus drawio](https://user-images.githubusercontent.com/48891644/213893901-1609cd19-bcb9-49b2-a63b-6992712c2edf.png)
### Classe Whatsapp
A classe Whatsapp será independente, ou seja ela poderá ser usado para outros chatbots e também para conversar com humano.   
### Classe Chat
Essa classe servirá para salvar a conversa no banco de dados(?) e decidir qual chatbot irá conversar.   
### Classe chatbot  
Essa clase irá enviar a mensagem para o modelo treinado em python.   

## Exemplo de conversa 

![exemploMsgNeg](https://user-images.githubusercontent.com/48891644/213894100-dc529ac6-e9ee-43fc-84a8-7faedffe90b9.PNG)    

![exemploMsgPos](https://user-images.githubusercontent.com/48891644/213894150-1d037846-838e-4eed-9fb9-96693ff54aa3.PNG)
