import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeviceCreateTheH323SipDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}

export enum DeviceCreateTheH323SipDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}


// DeviceCreateTheH323SipDeviceObject
/** 
 * The H.323/SIP device object.
**/
export class DeviceCreateTheH323SipDeviceObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryption, multipart_form, name=encryption" })
  encryption: DeviceCreateTheH323SipDeviceObjectEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ip, multipart_form, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=name, multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protocol, multipart_form, name=protocol" })
  protocol: DeviceCreateTheH323SipDeviceObjectProtocolEnum;
}


export class DeviceCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  theH323SIPDeviceObject?: DeviceCreateTheH323SipDeviceObject;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  theH323SIPDeviceObject1?: DeviceCreateTheH323SipDeviceObject;
}


export class DeviceCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// DeviceCreateTheH323SipDeviceObject1
/** 
 * The H.323/SIP device object.
**/
export class DeviceCreateTheH323SipDeviceObject1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryption" })
  encryption: DeviceCreateTheH323SipDeviceObjectEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: DeviceCreateTheH323SipDeviceObjectProtocolEnum;
}


export class DeviceCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: DeviceCreateRequests;

  @SpeakeasyMetadata()
  security: DeviceCreateSecurity;
}


export class DeviceCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  theH323SIPDeviceObject?: DeviceCreateTheH323SipDeviceObject1;
}
