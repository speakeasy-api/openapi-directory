import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountPlanBaseDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AccountPlanBaseDeleteApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: number;
}


export class AccountPlanBaseDeleteMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=reason" })
  reason?: number;
}


export class AccountPlanBaseDeleteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AccountPlanBaseDeleteApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AccountPlanBaseDeleteMultipartFormData;
}


export class AccountPlanBaseDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPlanBaseDeletePathParams;

  @SpeakeasyMetadata()
  request?: AccountPlanBaseDeleteRequests;
}


export class AccountPlanBaseDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountPlanBaseDelete204ApplicationJSONObject?: Record<string, any>;
}
