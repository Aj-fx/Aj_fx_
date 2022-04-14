FROM fusuf/whatsasena:latest

RUN git clone https://github.com/oggymon/oggy_ser /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines
RUN git clone https://github.com/Aj-fx/kaztroser

CMD ["node", "bot.js"]
