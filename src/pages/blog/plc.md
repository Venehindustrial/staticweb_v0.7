---
templateKey: article-page
title: Programmable Logic controller
slug: programmable-control
date: 2022-01-08T16:00:49.370Z
cover: /img/blog07.jpg
meta_title: PLC Industrial Control
meta_description: >-
  A programmable logic controller (PLC) or programmable controller is an industrial computer that has been 
  ruggedized and adapted for the control of manufacturing processes, such as assembly lines, machines, 
  robotic devices, or any activity that requires high reliability 
tags:
  - PLC
  - Industrial Control
  - Programmable Logic Control
  - Logic Control
---

A programmable logic controller (PLC) or programmable controller is an industrial computer that has been 
ruggedized and adapted for the control of manufacturing processes, such as assembly lines, machines, robotic 
devices, or any activity that requires high reliability, ease of programming, and process fault diagnosis. 
Dick Morley is considered as the father of PLC as he had invented the first PLC, the Modicon 084, for 
General Motors in 1968. (Wikipedia)

PLCs can range from small modular devices with tens of inputs and outputs (I/O), in a housing integral with 
the processor, to large rack-mounted modular devices with thousands of I/O, and which are often networked to 
other PLC and SCADA systems. (Wikipedia)

The kinds of equipment that PLCs can control are as varied as industrial facilities themselves. Utility 
Plants, Batch Control Application, Chemical Processing, Conveyor systems, food processing machinery, auto 
assembly lines etc…you name it and there’s probably a PLC out there controlling it.

The control program is the computer program stored in the PLC’s memory that tells the PLC what’s supposed to 
be going on in the system. The use of a PLC to provide the wiring connections between system devices is 
called softwiring. PLCs were first developed in the automobile manufacturing industry to provide flexible, 
rugged and easily programmable controllers to replace hard-wired relay logic systems. Since then, they have 
been widely adopted as high-reliability automation controllers suitable for harsh environments. 

How does a PLC work?

The programmable logic controller receives information from connected input devices and sensors, processes 
the received data, and triggers required outputs as per its pre-programmed parameters. Based on its inputs 
and outputs, a PLC can easily monitor and record runtime data like operating temperature, machine 
productivity, generation of alarms when a machine fails, automatic start and stop processes and more. This 
means that PLCs are robust and flexible manufacturing process control solutions that are adaptable to most 
applications.

PLC hardware components include:

    1.- CPU: checks the PLC regularly to prevent errors and performs functions like arithmetic operations 
    and logic operations.
    2.- Memory: system ROM permanently stores fixed data used by the CPU while RAM stores the input and 
    output device information, timer values, counters, and other internal devices.
    3.- O/P section: this section gives output control over devices like pumps, solenoids, lights, and 
    motors.
    4.- I/O section: an input section that tracks on field devices like switches and sensors.
    5.- Power supply: though most PLCs work at 24 VDC or 220VAC, some have isolated power supplies.
    6.- Programming device: is used to feed the program into the processor’s memory.

Process of a scan cycle

A PLC works in a program scan cycle, where it executes its program repeatedly. The simplest scan cycle 
consists of 3 steps:

    read inputs,
    execute the program,
    write outputs.

The program follows the sequence of instructions. It typically takes a time span of tens of milliseconds for 
the processor to evaluate all the instructions and update the status of all outputs.If the system 
contains remote I/O—for example, an external rack with I/O modules—then that introduces additional 
uncertainty in the response time of the PLC system

> References:
>> 1.- WebPage: https://en.wikipedia.org/wiki/Programmable_logic_controller

>> 2.- Webpage: https://www.automate.org/editorials/what-s-a-plc-programmable-logic-controller

>> 3.- Webpage: https://instrumentationtools.com/what-is-a-plc/
