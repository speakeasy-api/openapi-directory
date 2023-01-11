import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}

export enum DeviceUpdateTheH323SipDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}

export enum DeviceUpdateTheH323SipDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}


// DeviceUpdateTheH323SipDeviceObject
/** 
 * The H.323/SIP device object.
**/
export class DeviceUpdateTheH323SipDeviceObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryption, multipart_form, name=encryption" })
  encryption: DeviceUpdateTheH323SipDeviceObjectEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=ip, multipart_form, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=name, multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protocol, multipart_form, name=protocol" })
  protocol: DeviceUpdateTheH323SipDeviceObjectProtocolEnum;
}


export class DeviceUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  theH323SIPDeviceObject?: DeviceUpdateTheH323SipDeviceObject;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  theH323SIPDeviceObject1?: DeviceUpdateTheH323SipDeviceObject;
}


export class DeviceUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeviceUpdatePathParams;

  @SpeakeasyMetadata()
  request: DeviceUpdateRequests;
}


export class DeviceUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
