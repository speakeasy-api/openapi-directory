import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPhoneNumberDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numberId" })
  numberId: string;
}


export class GetPhoneNumberDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone"
}


export class GetPhoneNumberDetails200ApplicationJsonAssignee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetPhoneNumberDetails200ApplicationJsonAssigneeTypeEnum;
}

export enum GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}


export class GetPhoneNumberDetails200ApplicationJsonSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum GetPhoneNumberDetails200ApplicationJsonSourceEnum {
    Internal = "internal",
    External = "external"
}

export enum GetPhoneNumberDetails200ApplicationJsonStatusEnum {
    Pending = "pending",
    Available = "available"
}


export class GetPhoneNumberDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: GetPhoneNumberDetails200ApplicationJsonAssignee;

  @SpeakeasyMetadata({ data: "json, name=capability" })
  capability?: string[];

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: GetPhoneNumberDetails200ApplicationJsonNumberTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: GetPhoneNumberDetails200ApplicationJsonSite;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetPhoneNumberDetails200ApplicationJsonSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetPhoneNumberDetails200ApplicationJsonStatusEnum;
}


export class GetPhoneNumberDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPhoneNumberDetailsPathParams;

  @SpeakeasyMetadata()
  security: GetPhoneNumberDetailsSecurity;
}


export class GetPhoneNumberDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPhoneNumberDetails200ApplicationJSONObject?: GetPhoneNumberDetails200ApplicationJson;
}
