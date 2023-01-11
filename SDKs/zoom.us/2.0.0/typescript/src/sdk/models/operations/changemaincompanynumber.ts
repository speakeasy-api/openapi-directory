import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeMainCompanyNumberApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}


export class ChangeMainCompanyNumberMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=phone_number" })
  phoneNumber?: string;
}


export class ChangeMainCompanyNumberRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: ChangeMainCompanyNumberApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: ChangeMainCompanyNumberMultipartFormData;
}


export class ChangeMainCompanyNumberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ChangeMainCompanyNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: ChangeMainCompanyNumberRequests;

  @SpeakeasyMetadata()
  security: ChangeMainCompanyNumberSecurity;
}


export class ChangeMainCompanyNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changeMainCompanyNumber204ApplicationJSONAny?: any;
}
