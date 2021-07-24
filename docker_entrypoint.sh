#!/bin/sh

: ${PORT=80}
export PORT

echo $PORT

envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
