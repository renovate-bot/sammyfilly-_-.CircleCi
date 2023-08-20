/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorSimple8000SeriesManagementClient } = require("@azure/arm-storsimple8000series");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Patch Security properties of the specified device name.
 *
 * @summary Patch Security properties of the specified device name.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/DeviceSettingsUpdateSecuritySettings.json
 */
async function deviceSettingsUpdateSecuritySettings() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "Device05ForSDKTest";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest1";
  const parameters = {
    chapSettings: {
      initiatorSecret: {
        encryptionAlgorithm: "RSAES_PKCS1_v_1_5",
        encryptionCertThumbprint: "A872A2DF196AC7682EE24791E7DE2E2A360F5926",
        value:
          "V/uVfWk5OcXfMC0HvUV89o9+cmF636jBnqhFM1pD/zHhmh8Z1KB5/LhVV3T53uGjIlKL3wjhwg+9NIQrIbYuKhl/r8jSftSSH+WqUnQHTRDWazjPAeMu6ozrL5RYzP1h5mgw7XtidZPaaV9ae/uF1KQPkK6TIARaOTdr8I/BLWUg7WdDrfARNYHnW6ezXek1M9Qhv1sL9fZY+JrGB58LF6D2aC2Xjed4K4Jk6v2T1ieneNV27uIdnt21TajuM7w90UlRiVZJZtq/KdEUfqI28C7VoUdcXluAwzR95Ho8hmyIJDqeW3/Wxymdjv+Rctwqtmcka9i2G85Hj8SVV3g4kA==",
      },
      initiatorUser: "test-initiator-user",
      targetSecret: {
        encryptionAlgorithm: "RSAES_PKCS1_v_1_5",
        encryptionCertThumbprint: "A872A2DF196AC7682EE24791E7DE2E2A360F5926",
        value:
          "OTR4uwVpy+pf0zthnCIAUXurC8NdSh8RpRG5GWL9TSv4WtkVmpeU/U2A4vjkrchfQOzI1x+uooWikWW9txwwQOM+/N3NG44+/dlHoaEe7AxjmItCKhNj8K2RM6D1mb45wicbF/M4uanuXnGXuT+JmZ+1Lcy2k1GXsk67ejplz2K08h37B+oIW85qMUHLdKuuQlAA/fFS+q6qMti3j2Q8Fr+Sh4U76/2AZVkKRtFeqPB1QhC12dFx6TFoZJkMFzdQz4WNvWVelIK2McKNnOiH0/Z5lAXC7164uzReAoTEfqoNU7qqqRrHhsdwWPu6jbeUn8BQnr7A/X6NWvgeax+HGA==",
      },
      targetUser: "test-target-user",
    },
    deviceAdminPassword: {
      encryptionAlgorithm: "RSAES_PKCS1_v_1_5",
      encryptionCertThumbprint: "A872A2DF196AC7682EE24791E7DE2E2A360F5926",
      value: "<value>",
    },
    remoteManagementSettings: { remoteManagementMode: "HttpsAndHttpEnabled" },
    snapshotPassword: {
      encryptionAlgorithm: "RSAES_PKCS1_v_1_5",
      encryptionCertThumbprint: "A872A2DF196AC7682EE24791E7DE2E2A360F5926",
      value: "<value>",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(credential, subscriptionId);
  const result = await client.deviceSettings.beginUpdateSecuritySettingsAndWait(
    deviceName,
    resourceGroupName,
    managerName,
    parameters
  );
  console.log(result);
}

deviceSettingsUpdateSecuritySettings().catch(console.error);
