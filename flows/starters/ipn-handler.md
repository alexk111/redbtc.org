---
id: ipn-handler
title: Handling Instant Payment Notifications
sidebar_label: Handling Instant Payment Notifications (IPN)
hide_table_of_contents: true
---

This flow implements an IPN handler. It checks if the invoice status is either "confirmed" or "complete" and outputs the invoice data to Debug window.

As the incoming data cannot be trusted, it first fetches the invoice data via API.

![IPN Handler Flow](./assets/ipn-handler.png)

## Node-RED Flow

```json
[
  {
    "id": "736c229c.ab7cac",
    "type": "http in",
    "z": "ba32a89d.bb8058",
    "name": "",
    "url": "/btcpay-ipn/",
    "method": "post",
    "upload": false,
    "swaggerDoc": "",
    "x": 1310,
    "y": 1520,
    "wires": [["f2be4afb.00d598"]]
  },
  {
    "id": "aab8090f.58f9b8",
    "type": "http response",
    "z": "ba32a89d.bb8058",
    "name": "http response = ok",
    "statusCode": "",
    "headers": {},
    "x": 1830,
    "y": 1520,
    "wires": []
  },
  {
    "id": "eaa2a84a.b34c28",
    "type": "comment",
    "z": "ba32a89d.bb8058",
    "name": "IPN handler",
    "info": "",
    "x": 1290,
    "y": 1480,
    "wires": []
  },
  {
    "id": "f2be4afb.00d598",
    "type": "change",
    "z": "ba32a89d.bb8058",
    "name": "Prepare data for API",
    "rules": [
      {
        "t": "set",
        "p": "path",
        "pt": "msg",
        "to": "\"/invoices/\" & payload.id",
        "tot": "jsonata"
      },
      { "t": "delete", "p": "payload", "pt": "msg" }
    ],
    "action": "",
    "property": "",
    "from": "",
    "to": "",
    "reg": false,
    "x": 1560,
    "y": 1520,
    "wires": [["3742ff32.f70bd"]]
  },
  {
    "id": "5cebc59b.a3967c",
    "type": "debug",
    "z": "ba32a89d.bb8058",
    "name": "Invoice Data",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": true,
    "complete": "payload",
    "targetType": "msg",
    "statusVal": "payload.status",
    "statusType": "msg",
    "x": 2010,
    "y": 1560,
    "wires": []
  },
  {
    "id": "3742ff32.f70bd",
    "type": "btcpay-api",
    "z": "ba32a89d.bb8058",
    "method": "GET",
    "path": "",
    "client": "9711e4a7.bae348",
    "name": "Fetch Invoice",
    "x": 1590,
    "y": 1560,
    "wires": [["aab8090f.58f9b8", "ab9df35f.1a20b"]]
  },
  {
    "id": "ab9df35f.1a20b",
    "type": "switch",
    "z": "ba32a89d.bb8058",
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
    "x": 1810,
    "y": 1560,
    "wires": [["5cebc59b.a3967c"], ["5cebc59b.a3967c"]]
  },
  { "id": "9711e4a7.bae348", "type": "btcpay-api-config", "z": "", "name": "" }
]
```
