#!/bin/bash
cd /var/www/html/
rm -rf *
sudo chmod -R 755 /opt/codedeploy-agent/deployment-root/
sudo chown -R codedeploy-user:codedeploy-user /opt/codedeploy-agent/deployment-root/

