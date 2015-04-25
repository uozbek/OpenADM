#!/bin/bash

function install_floodlight {
    cd $rootpath/..
    $rootpath/adapter/floodlight/install.sh
}

function test_core {
    cd $rootpath/core
    python setup.py test
}

function install_core {
    cd $rootpath/core
    python setup.py install
}

function test_ui {
    cd $rootpath/ui
    npm install
    npm test
}

function install {
    install_floodlight
    install_core
}

function test {
    install
    test_ui
    test_core
}

rootpath=`pwd`
$@