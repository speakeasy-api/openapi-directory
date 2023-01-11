import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tsp200ApplicationJsonDialInNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum Tsp200ApplicationJsonTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}


export class Tsp200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dial_in_number_unrestricted" })
  dialInNumberUnrestricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dial_in_numbers", elemType: Tsp200ApplicationJsonDialInNumbers })
  dialInNumbers?: Tsp200ApplicationJsonDialInNumbers[];

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=master_account_setting_extended" })
  masterAccountSettingExtended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modify_credential_forbidden" })
  modifyCredentialForbidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tsp_bridge" })
  tspBridge?: Tsp200ApplicationJsonTspBridgeEnum;

  @SpeakeasyMetadata({ data: "json, name=tsp_enabled" })
  tspEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tsp_provider" })
  tspProvider?: string;
}


export class TspResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tsp200ApplicationJSONObject?: Tsp200ApplicationJson;
}
