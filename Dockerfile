# Usa o Node.js oficial como base
FROM node:20-alpine

# Cria a pasta de trabalho dentro do container
WORKDIR /app

# Copia o seu script para dentro do container
COPY script.js .

# Comando que o container vai rodar quando for iniciado
CMD ["node", "script.js"]
