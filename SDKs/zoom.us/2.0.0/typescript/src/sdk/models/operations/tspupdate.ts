import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TspUpdateApplicationJsonTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}


export class TspUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dial_in_number_unrestricted" })
  dialInNumberUnrestricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=master_account_setting_extended" })
  masterAccountSettingExtended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modify_credential_forbidden" })
  modifyCredentialForbidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tsp_bridge" })
  tspBridge?: TspUpdateApplicationJsonTspBridgeEnum;

  @SpeakeasyMetadata({ data: "json, name=tsp_enabled" })
  tspEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tsp_provider" })
  tspProvider?: string;
}

export enum TspUpdateMultipartFormDataTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}


export class TspUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=dial_in_number_unrestricted" })
  dialInNumberUnrestricted?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=master_account_setting_extended" })
  masterAccountSettingExtended?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=modify_credential_forbidden" })
  modifyCredentialForbidden?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=tsp_bridge" })
  tspBridge?: TspUpdateMultipartFormDataTspBridgeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=tsp_enabled" })
  tspEnabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=tsp_provider" })
  tspProvider?: string;
}


export class TspUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: TspUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: TspUpdateMultipartFormData;
}


export class TspUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: TspUpdateRequests;
}


export class TspUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
