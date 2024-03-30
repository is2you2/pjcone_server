apt update -y;apt upgrade -y;apt install curl -y
curl -fsSL https://deb.nodesource.com/setup_21.x | bash -
apt-get install -y nodejs
cd /usr/local/apache2/htdocs/
npm i
apachectl
npm start