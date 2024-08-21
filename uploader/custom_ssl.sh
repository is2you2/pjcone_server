openssl genpkey -algorithm RSA -out ../data/private.key
openssl req -new -key ../data/private.key -out request.csr
openssl req -x509 -nodes -days 365 -key ../data/private.key -in request.csr -out ../data/public.crt
rm request.csr