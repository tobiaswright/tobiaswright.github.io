---
layout: '../../layouts/Layout.astro'
title: 'Rasberry PI Setup'
pubDate: 2025-02-24
description: 'Setting up my Rasberry PI'
author: 'Tobias Wright'
tags: ["javascript", "objects"]
---

## Setting up my RasberryPI as a personal server

I finally updated my and using my old Rasberry pi.

What I want to do with it is:
-	Access to the internet to reach public APIs
-	Run some small apps I created
-	Run a couple of repeating scripts
-	SSH in from my main computer
-	Use an easy to remember local address

Here is what I did to get it set up.

1.	(Only if needed) Update your configuration so you can use `apt-update`. 

```bash
apt-get update --allow-releaseinfo-change
```

*[Source](https://forums.raspberrypi.com/viewtopic.php?t=245073#p1495319)*

2.	Run these commands to update the rasberryPI:

```bash
apt-get update
sudo apt-get upgrade
```

3.	To get your network to use an easy to remember address (as oppose to the IP address) you can use something called Multicast Domain Name Service (mDNS) – [it’s explained here way better than I can explain](https://www.howtogeek.com/167190/how-and-why-to-assign-the-.local-domain-to-your-raspberry-pi/), it’s flavor is called Bonjour, its an apple thing. You can get it installed on your PI with the following command. For Macs on the network, that’s it. For windows machines, you may need to install itunes.

```bash
sudo apt-get install avahi-daemon
```

That’s it. You should be able to ping `rasberrypi.local` on your network

*[Source](https://www.howtogeek.com/167190/how-and-why-to-assign-the-.local-domain-to-your-raspberry-pi/)*

4.	Finally to get SSH working, you have to enable it.

```bash
sudo raspi-config
```

5.	Update password: `Systems Options>Password`
6.	`Enable SSH`
