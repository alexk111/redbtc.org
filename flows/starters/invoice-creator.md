---
id: invoice-creator
title: Creating Invoices
sidebar_label: Creating Invoices
hide_table_of_contents: true
---

This flow enables you to create an invoice with params specified in the "Invoice params" node by clicking the inject button.

The "Invoice URL" node outputs the url of the new invoice to Debug window.

![Invoice Creator Flow](./assets/invoice-creator.png)

## Node-RED Flow

```
[
  {
    "id": "c4c2c8b0.eff678",
    "type": "btcpay-api",
    "z": "ba32a89d.bb8058",
    "method": "POST",
    "path": "/invoices",
    "client": "9711e4a7.bae348",
    "name": "Create Invoice",
    "x": 1580,
    "y": 1200,
    "wires": [["5e55e5f3.e5501c"]]
  },
  {
    "id": "6336ada3.af15e4",
    "type": "inject",
    "z": "ba32a89d.bb8058",
    "name": "Invoice params",
    "props": [
      { "p": "price", "v": "50", "vt": "num" },
      { "p": "currency", "v": "USD", "vt": "str" },
      { "p": "notificationURL", "v": "", "vt": "str" }
    ],
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "topic": "",
    "payloadType": "str",
    "x": 1320,
    "y": 1160,
    "wires": [["ec12423d.55997"]]
  },
  {
    "id": "5e55e5f3.e5501c",
    "type": "debug",
    "z": "ba32a89d.bb8058",
    "name": "Invoice URL",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "payload.url",
    "targetType": "msg",
    "statusVal": "",
    "statusType": "auto",
    "x": 1810,
    "y": 1200,
    "wires": []
  },
  {
    "id": "181046cb.900e49",
    "type": "comment",
    "z": "ba32a89d.bb8058",
    "name": "Invoice Creator",
    "info": "",
    "x": 1300,
    "y": 1120,
    "wires": []
  },
  {
    "id": "ec12423d.55997",
    "type": "change",
    "z": "ba32a89d.bb8058",
    "name": "Prepare data for API",
    "rules": [
      {
        "t": "move",
        "p": "price",
        "pt": "msg",
        "to": "payload.price",
        "tot": "msg"
      },
      {
        "t": "move",
        "p": "currency",
        "pt": "msg",
        "to": "payload.currency",
        "tot": "msg"
      },
      {
        "t": "move",
        "p": "notificationURL",
        "pt": "msg",
        "to": "payload.notificationURL",
        "tot": "msg"
      }
    ],
    "action": "",
    "property": "",
    "from": "",
    "to": "",
    "reg": false,
    "x": 1560,
    "y": 1160,
    "wires": [["c4c2c8b0.eff678"]]
  },
  { "id": "9711e4a7.bae348", "type": "btcpay-api-config", "z": "", "name": "" }
]
```
