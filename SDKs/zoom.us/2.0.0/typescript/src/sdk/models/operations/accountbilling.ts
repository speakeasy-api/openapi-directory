import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountBillingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AccountBilling200ApplicationJson
/** 
 * Billing Contact object.
**/
export class AccountBilling200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=apt" })
  apt?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}


export class AccountBillingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountBillingPathParams;
}


export class AccountBillingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountBilling200ApplicationJSONObject?: AccountBilling200ApplicationJson;
}
