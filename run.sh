#!/usr/bin/env bash

case $1 in
  start)
    npm start | cat
    ;;
  build)
    npm build
    ;;
  test)
    npm test $@
    ;;
  *)
    exec "$@"
    ;;
esac
