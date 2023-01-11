import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountPlanAddonCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AccountPlanAddonCreateApplicationJson1
/** 
 * Account plan object.
**/
export class AccountPlanAddonCreateApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase
/** 
 * Additional phone base plans.
**/
export class AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanAddonCreateApplicationJson2PhonePlan
/** 
 * Phone Plan Object
**/
export class AccountPlanAddonCreateApplicationJson2PhonePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_calling", elemType: AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling })
  planCalling?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanCalling[];

  @SpeakeasyMetadata({ data: "json, name=plan_number", elemType: AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber })
  planNumber?: AccountPlanAddonCreateApplicationJson2PhonePlanPlanNumber[];
}


// AccountPlanAddonCreateApplicationJson2
/** 
 * Zoom Phone Plan Object
**/
export class AccountPlanAddonCreateApplicationJson2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_details" })
  planDetails: AccountPlanAddonCreateApplicationJson2PhonePlan;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


// AccountPlanAddonCreateMultipartFormData1
/** 
 * Account plan object.
**/
export class AccountPlanAddonCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=hosts" })
  hosts: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type: string;
}


// AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase
/** 
 * Additional phone base plans.
**/
export class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callout_countries" })
  calloutCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPlanAddonCreateMultipartFormData2PhonePlan
/** 
 * Phone Plan Object
**/
export class AccountPlanAddonCreateMultipartFormData2PhonePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_base" })
  planBase?: AccountPlanAddonCreateMultipartFormData2PhonePlanPlanBase;

  @SpeakeasyMetadata({ data: "json, name=plan_calling", elemType: AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling })
  planCalling?: AccountPlanAddonCreateMultipartFormData2PhonePlanPlanCalling[];

  @SpeakeasyMetadata({ data: "json, name=plan_number", elemType: AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber })
  planNumber?: AccountPlanAddonCreateMultipartFormData2PhonePlanPlanNumber[];
}


// AccountPlanAddonCreateMultipartFormData2
/** 
 * Zoom Phone Plan Object
**/
export class AccountPlanAddonCreateMultipartFormData2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=plan_details;json=true" })
  planDetails: AccountPlanAddonCreateMultipartFormData2PhonePlan;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type: string;
}


export class AccountPlanAddonCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  oneOf1?: any;
}


export class AccountPlanAddonCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPlanAddonCreatePathParams;

  @SpeakeasyMetadata()
  request: AccountPlanAddonCreateRequests;
}


export class AccountPlanAddonCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
