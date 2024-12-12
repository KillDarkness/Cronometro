# Cronômetro de Cubo Mágico

Este projeto é um cronômetro simples para uso no cubo mágico. Ele conta o tempo com precisão de milissegundos e exibe uma interface básica com um fundo preto e números grandes. O cronômetro pode ser iniciado e parado com a barra de espaço, e há um menu de configurações acessível ao pressionar a tecla "K".

## Funcionalidades

- **Iniciar/Parar Cronômetro**: Aperte e segure a barra de espaço para iniciar o cronômetro, e solte para começar a contagem.
- **Milissegundos**: Exibição de milissegundos e segundos com a opção de habilitar ou desabilitar a exibição de milissegundos.
- **Configurações**: Menu configurável onde é possível ajustar a mensagem do cronômetro, tempo de segurar a barra de espaço para iniciar, entre outros.
- **Reseta o tempo**: O cronômetro sempre começa do zero.

## Como usar

1. **Iniciar o Cronômetro**:
   - Aperte e segure a barra de espaço para iniciar o cronômetro.
   - A cor do cronômetro ficará verde após o tempo de espera configurado (1 segundo por padrão).
   - Solte a barra de espaço para iniciar a contagem de tempo.
   
2. **Parar o Cronômetro**:
   - Pressione a barra de espaço para parar o cronômetro e exibir o tempo corrido.

3. **Configurações**:
   - Aperte a tecla `K` para abrir o menu de configurações.
   - No menu, você pode:
     - **Alterar o tempo de segurar a barra para começar**.
     - **Escolher se quer exibir os milissegundos**.
     - **Alterar a mensagem abaixo do cronômetro**.
     - **Alterar a mensagem durante a contagem**.

## Arquitetura do Código

O código está organizado em três arquivos principais:

- **`index.html`**: Estrutura HTML para o cronômetro e o menu de configurações.
- **`styles.css`**: Arquivo de estilos para a interface do cronômetro.
- **`settings.js`**: Lógica de configurações e exibição do menu.
- **`cronometro.js`**: Lógica principal do cronômetro, incluindo a contagem do tempo e controle do estado (iniciar/parar).

## Como rodar o projeto

1. Clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/KillDarkness/Cronometro.git
