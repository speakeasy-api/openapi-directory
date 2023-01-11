import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountPlanAddonUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AccountPlanAddonUpdateApplicationJson
/** 
 * Account plan object.
**/
export class AccountPlanAddonUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// AccountPlanAddonUpdateMultipartFormData
/** 
 * Account plan object.
**/
export class AccountPlanAddonUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type: string;
}


export class AccountPlanAddonUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AccountPlanAddonUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AccountPlanAddonUpdateMultipartFormData;
}


export class AccountPlanAddonUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPlanAddonUpdatePathParams;

  @SpeakeasyMetadata()
  request: AccountPlanAddonUpdateRequests;
}


export class AccountPlanAddonUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
