/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DnsManagementClient } from "@azure/arm-dns";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListARecordset.json
 */
async function listARecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "A";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listARecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListAAAARecordset.json
 */
async function listAaaaRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "AAAA";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAaaaRecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListCaaRecordset.json
 */
async function listCaaRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "CAA";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listCaaRecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListCNAMERecordset.json
 */
async function listCnameRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "CNAME";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listCnameRecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListMXRecordset.json
 */
async function listMxRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "MX";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listMxRecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListNSRecordset.json
 */
async function listNsRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "NS";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listNsRecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListPTRRecordset.json
 */
async function listPtrRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "0.0.127.in-addr.arpa";
  const recordType = "PTR";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPtrRecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListSOARecordset.json
 */
async function listSoaRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "SOA";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listSoaRecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListSRVRecordset.json
 */
async function listSrvRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "SRV";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listSrvRecordsets().catch(console.error);

/**
 * This sample demonstrates how to Lists the record sets of a specified type in a DNS zone.
 *
 * @summary Lists the record sets of a specified type in a DNS zone.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/ListTXTRecordset.json
 */
async function listTxtRecordsets() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const recordType = "TXT";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.recordSets.listByType(
    resourceGroupName,
    zoneName,
    recordType
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listTxtRecordsets().catch(console.error);
