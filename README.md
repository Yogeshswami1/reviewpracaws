# Saumic_reviews_mern


sudo nano /etc/nginx/sites-available/reviewfrontendaws.saumic.com


server {
    listen 80;
    server_name reviewfrontendaws.saumic.com;  

    root /var/www/html/reviewaws/client/build; # Replace with the path to your build directory
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_log /var/log/nginx/reviewfrontendaws.saumic.com.log;
    access_log /var/log/nginx/reviewfrontendaws.saumic.com.log;
}


sudo ln -s /etc/nginx/sites-available/reviewfrontendaws.saumic.com /etc/nginx/sites-enabled/


sudo nano /etc/nginx/sites-available/reviewbackaws.saumic.com
server {
    listen 80;
    server_name reviewbackaws.saumic.com;

    location / {
        proxy_pass http://reviewbackaws.saumic.com;  # Assuming your Node.js app is running on port 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_log /var/log/nginx/reviewbackaws.saumic.com.error.log;
    access_log /var/log/nginx/reviewbackaws.saumic.com.access.log;
}


