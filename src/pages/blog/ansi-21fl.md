---
templateKey: article-page
title: ANSI 21 FL Protection
slug: ansi-21fl-protection
date: 2022-01-04T11:00:49.370Z
cover: /img/blog06.jpg
meta_title: ANSI 21 FL
meta_description: >-
  The function of the IED is to trip and isolate the fault from the outgoing of the substation. Normally this is the position of the IED, controlling the circuit breakers of the feeders from HV/MV substations collaborating in the information collection to help in the fault location." 
tags:
  - ANSI 21
  - 21 FL Protection
  - Medium Voltage protection
  - 21 Fault Locator
---

The FL function is described through ANSI 21FL, from the normative ANSI C37.2. This function is defined too 
through IEC in the normative 60617 as FLOC [68]. The function ANSI 21FL is present normally in some 
protection divice for the electrical network.

It is important remark that the function ANSI 21FL from come ANSI 21, which is the distance fault function 
according to ANSI C37.2. The protection distance 21 help to locate a fault within pre-set distance from its 
location in a long a transmission line or power cable. In HV system, the ANSI 21 protection considers la 
resistance and reactance by kilometer in the line conforming a total impedance where the impedance is is 
clearly known by the operator of teh network.

How 21FL works:

When a fault occurs on a protected section of a distribution feeder, values are generated for fault 
magnitude and impedances. These readings are provided to the algorithm in combination with the known 
parameters of the feeder under protection, such as the positive and zero sequence resistance and reactance 
of the line.

When the calculations are completed by the relay, it returns estimates for six parameters:

    The distance to fault
    The fault impedance magnitude
    The fault impedance angle
    The fault loop impedance magnitude
    The measured Positive Sequence Reactance from the Relay to the Fault location
    Fault Loop Impedance Angle

The IEDs use the voltage and current measures in real time and compare with the impedance of the line in 
order to identify the section of the fault. Through the algorithms of this protection, it is possible to 
calculate the fault distance to the fault.

Several manufacturer have implemented the function 21FL in their IED's. The cost the this function in an IED 
for HV/MV subtation outgoing has not a big impact, although in other kind the devices such as FPI or 
Telecontrol system for MV/LV substation the cost difference will be significative.    

When to use Fault Locator:

Fault locator is a useful tool for reducing outage duration and minimising line patrol work. There are some 
distribution applications for which it is ideally suited, but there are also some limitations to the 
algorithm that engineers should know.

Fault locator works best when:

    The network under protection is radial
    The network is effectively earthed
    The fault magnitude is substantial

When the network has many spurs, or “tee-off” connections, there are multiple possible fault locations from 
the protection devices’ perspective that would meet the same distance to fault. While this may be helpful, 
reducing the number of fault sites down from a whole feeder to a few plausible locations, as the feeder 
complexity grows the ability to accurately locate the fault reduces.

The precision of the fault location is also subject to fault severity. Lower fault impedances generate more 
fault current values, assisting the accuracy of the fault location.

Fault Location with complex and non-radial distribution networks.


> References:
>> 1.- WebPage:https://electrical-engineering-portal.com/download-center/books-and-guides/electricity-generation-t-d/automatic-fault-location-dg

>> 2.- Webpage:https://www.nojapower.com.au/press/2021/understanding-fault-locator-ANSI-21-FL.html
