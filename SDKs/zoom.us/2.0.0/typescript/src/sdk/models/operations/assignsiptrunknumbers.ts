import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignSipTrunkNumbersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AssignSipTrunkNumbersApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_numbers" })
  phoneNumbers?: string[];
}


export class AssignSipTrunkNumbersMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=phone_numbers;json=true" })
  phoneNumbers?: string[];
}


export class AssignSipTrunkNumbersRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AssignSipTrunkNumbersApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AssignSipTrunkNumbersMultipartFormData;
}


export class AssignSipTrunkNumbersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AssignSipTrunkNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignSipTrunkNumbersPathParams;

  @SpeakeasyMetadata()
  request?: AssignSipTrunkNumbersRequests;

  @SpeakeasyMetadata()
  security: AssignSipTrunkNumbersSecurity;
}


export class AssignSipTrunkNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignSipTrunkNumbers201ApplicationJSONAny?: any;
}
