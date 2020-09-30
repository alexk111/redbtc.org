---
id: ipn-handler
title: Handling Instant Payment Notifications
sidebar_label: Handling Instant Payment Notifications (IPN)
hide_table_of_contents: true
---

This flow implements a simple IPN handler. It checks if the invoice status is either "confirmed" or "complete" and outputs the invoice data to Debug window.

![IPN Handler Flow](./assets/ipn-handler.png)

## Node-RED Flow

```
[
  {
    "id": "104235db.a6176a",
    "type": "btcpay-ipn",
    "z": "ee9c9c24.20b96",
    "client": "",
    "path": "/btcpay-ipn",
    "name": "",
    "x": 400,
    "y": 1240,
    "wires": [["8c74d639.2e0d88"]]
  },
  {
    "id": "a2a2d5f9.0bc0d8",
    "type": "comment",
    "z": "ee9c9c24.20b96",
    "name": "IPN handler",
    "info": "",
    "x": 410,
    "y": 1200,
    "wires": []
  },
  {
    "id": "bbf0388f.9332e8",
    "type": "debug",
    "z": "ee9c9c24.20b96",
    "name": "Invoice Data",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": true,
    "complete": "payload",
    "targetType": "msg",
    "statusVal": "payload.status",
    "statusType": "msg",
    "x": 790,
    "y": 1240,
    "wires": []
  },
  {
    "id": "8c74d639.2e0d88",
    "type": "switch",
    "z": "ee9c9c24.20b96",
    "name": "check status",
    "property": "payload.status",
    "propertyType": "msg",
    "rules": [
      { "t": "eq", "v": "confirmed", "vt": "str" },
      { "t": "eq", "v": "complete", "vt": "str" }
    ],
    "checkall": "false",
    "repair": false,
    "outputs": 2,
    "x": 590,
    "y": 1240,
    "wires": [["bbf0388f.9332e8"], ["bbf0388f.9332e8"]]
  }
]
```
