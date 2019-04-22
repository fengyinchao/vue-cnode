#!/bin/bash
set -e
read -p "Input Commit Message: " message

if [[ -z $message ]];then
  echo 'Commit Message Can Not Be Empty'
else
  git add .
  git commit -m "${message}"
  git push
  exit 0
fi
