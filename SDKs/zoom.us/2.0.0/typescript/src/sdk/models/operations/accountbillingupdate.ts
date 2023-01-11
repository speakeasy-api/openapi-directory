import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountBillingUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AccountBillingUpdateApplicationJson
/** 
 * Billing Contact object.
**/
export class AccountBillingUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=apt" })
  apt?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


// AccountBillingUpdateMultipartFormData
/** 
 * Billing Contact object.
**/
export class AccountBillingUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=apt" })
  apt?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=zip" })
  zip?: string;
}


export class AccountBillingUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AccountBillingUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AccountBillingUpdateMultipartFormData;
}


export class AccountBillingUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountBillingUpdatePathParams;

  @SpeakeasyMetadata()
  request: AccountBillingUpdateRequests;
}


export class AccountBillingUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
