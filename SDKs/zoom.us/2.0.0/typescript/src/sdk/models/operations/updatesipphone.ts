import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSipPhonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneId" })
  phoneId: string;
}

export enum UpdateSipPhoneApplicationJsonTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum UpdateSipPhoneApplicationJsonTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum UpdateSipPhoneApplicationJsonTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}


export class UpdateSipPhoneApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorization_name" })
  authorizationName: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server" })
  proxyServer: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server2" })
  proxyServer2: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server3" })
  proxyServer3: string;

  @SpeakeasyMetadata({ data: "json, name=register_server" })
  registerServer: string;

  @SpeakeasyMetadata({ data: "json, name=register_server2" })
  registerServer2: string;

  @SpeakeasyMetadata({ data: "json, name=register_server3" })
  registerServer3: string;

  @SpeakeasyMetadata({ data: "json, name=registration_expire_time" })
  registrationExpireTime?: number;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol" })
  transportProtocol?: UpdateSipPhoneApplicationJsonTransportProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol2" })
  transportProtocol2?: UpdateSipPhoneApplicationJsonTransportProtocol2Enum;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol3" })
  transportProtocol3?: UpdateSipPhoneApplicationJsonTransportProtocol3Enum;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName: string;

  @SpeakeasyMetadata({ data: "json, name=voice_mail" })
  voiceMail: string;
}

export enum UpdateSipPhoneMultipartFormDataTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum UpdateSipPhoneMultipartFormDataTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum UpdateSipPhoneMultipartFormDataTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}


export class UpdateSipPhoneMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=authorization_name" })
  authorizationName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=proxy_server" })
  proxyServer: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=proxy_server2" })
  proxyServer2: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=proxy_server3" })
  proxyServer3: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=register_server" })
  registerServer: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=register_server2" })
  registerServer2: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=register_server3" })
  registerServer3: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=registration_expire_time" })
  registrationExpireTime?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=transport_protocol" })
  transportProtocol?: UpdateSipPhoneMultipartFormDataTransportProtocolEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=transport_protocol2" })
  transportProtocol2?: UpdateSipPhoneMultipartFormDataTransportProtocol2Enum;

  @SpeakeasyMetadata({ data: "multipart_form, name=transport_protocol3" })
  transportProtocol3?: UpdateSipPhoneMultipartFormDataTransportProtocol3Enum;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_name" })
  userName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=voice_mail" })
  voiceMail: string;
}


export class UpdateSipPhoneRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateSipPhoneApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateSipPhoneMultipartFormData;
}


export class UpdateSipPhoneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateSipPhoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSipPhonePathParams;

  @SpeakeasyMetadata()
  request?: UpdateSipPhoneRequests;

  @SpeakeasyMetadata()
  security: UpdateSipPhoneSecurity;
}


export class UpdateSipPhoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSIPPhone204ApplicationJSONObject?: Record<string, any>;
}
