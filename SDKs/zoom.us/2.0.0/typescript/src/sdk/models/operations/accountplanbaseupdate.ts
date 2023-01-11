import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountPlanBaseUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AccountPlanBaseUpdateApplicationJson
/** 
 * Account base plan object.
**/
export class AccountPlanBaseUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// AccountPlanBaseUpdateMultipartFormData
/** 
 * Account base plan object.
**/
export class AccountPlanBaseUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type: string;
}


export class AccountPlanBaseUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AccountPlanBaseUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AccountPlanBaseUpdateMultipartFormData;
}


export class AccountPlanBaseUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPlanBaseUpdatePathParams;

  @SpeakeasyMetadata()
  request: AccountPlanBaseUpdateRequests;
}


export class AccountPlanBaseUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
