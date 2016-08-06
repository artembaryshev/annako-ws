# annako-meteor

![Vagrant](http://www.layh.com/wp-content/uploads/2014/05/logo_vagrant.png)
![MeteorJS](http://i.imgur.com/04sEyZU.png)

Move site from mojolicious to the meteor

### Prerequisite

* [Virtual Box] - The Virtual Machine Manager
* [Vagrant] - Development environments based on VM


### Installation

Clone the repository

```sh
$ git clone https://github.com/artembaryshev/annako-ws.git
```

Run the Vagrant Meteor Machine

```sh
$ vagrant up
```

Reload the machine - also in case the app is not running right after the "vagrant up"

```sh
$ vagrant reload --provision
```

Open the app from you browser

**2.2.2.2:3000**


### Usage

All the Meteor files are in the folder /app/

[Virtual Box]:https://www.virtualbox.org/
[Vagrant]:https://www.vagrantup.com/
