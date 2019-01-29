FROM node:9
WORKDIR /usr/src/ctracks

# Due to multi-stage imaging, these instructions ensure that building will only install the node
# dependencies once until package.json is updated.
COPY package.json ./
RUN npm install

## Only use this section if higlass needs to be on a specific branch
# WORKDIR /usr/src/
# RUN git clone https://github.com/higlass/higlass.git
# WORKDIR /usr/src/higlass
# RUN git checkout v1.3.0-rc.5
# RUN npm install
# RUN npm run build
# RUN npm link
# WORKDIR /usr/src/ctracks
# RUN npm link higlass

COPY . .
EXPOSE 3000

RUN echo "SKIP_PREFLIGHT_CHECK=true" > .env

ENTRYPOINT ["bash", "/usr/src/ctracks/run.sh"]
CMD ["start"]
