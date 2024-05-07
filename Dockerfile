FROM node:21.7.3 as builder


WORKDIR /home/node

COPY package.json .
RUN npm install 

COPY . .

RUN npm run build


FROM node:21.7.3 

WORKDIR /home/node

### Add this:
RUN npx prisma generate 
COPY --from=builder /home/node/lib ./lib
RUN npm run build

USER node
COPY package.json .
RUN npm install

EXPOSE 8886
CMD ["npm","run", "start"]