import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePhoneSiteApplicationJsonDefaultEmergencyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_line1" })
  addressLine1: string;

  @SpeakeasyMetadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=state_code" })
  stateCode: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}


// CreatePhoneSiteApplicationJsonShortExtension
/** 
 * Short extension of the phone site.
**/
export class CreatePhoneSiteApplicationJsonShortExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;
}


export class CreatePhoneSiteApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_receptionist_name" })
  autoReceptionistName: string;

  @SpeakeasyMetadata({ data: "json, name=default_emergency_address" })
  defaultEmergencyAddress?: CreatePhoneSiteApplicationJsonDefaultEmergencyAddress;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=short_extension" })
  shortExtension?: CreatePhoneSiteApplicationJsonShortExtension;

  @SpeakeasyMetadata({ data: "json, name=site_code" })
  siteCode?: number;
}


export class CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_line1" })
  addressLine1: string;

  @SpeakeasyMetadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=state_code" })
  stateCode: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip: string;
}


// CreatePhoneSiteMultipartFormDataShortExtension
/** 
 * Short extension of the phone site.
**/
export class CreatePhoneSiteMultipartFormDataShortExtension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;
}


export class CreatePhoneSiteMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=auto_receptionist_name" })
  autoReceptionistName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=default_emergency_address;json=true" })
  defaultEmergencyAddress?: CreatePhoneSiteMultipartFormDataDefaultEmergencyAddress;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=short_extension;json=true" })
  shortExtension?: CreatePhoneSiteMultipartFormDataShortExtension;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_code" })
  siteCode?: number;
}


export class CreatePhoneSiteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CreatePhoneSiteApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: CreatePhoneSiteMultipartFormData;
}


export class CreatePhoneSiteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class CreatePhoneSite204ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreatePhoneSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreatePhoneSiteRequests;

  @SpeakeasyMetadata()
  security: CreatePhoneSiteSecurity;
}


export class CreatePhoneSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createPhoneSite204ApplicationJSONObject?: CreatePhoneSite204ApplicationJson;
}
