#!/bin/bash
rm -rf /var/www/html/*
sudo service codedeploy-agent stop
rm -rf /opt/codedeploy-agent/deployment-root/*
sudo service codedeploy-agent start
