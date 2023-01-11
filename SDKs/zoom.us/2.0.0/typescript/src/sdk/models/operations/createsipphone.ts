import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateSipPhoneApplicationJsonTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum CreateSipPhoneApplicationJsonTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum CreateSipPhoneApplicationJsonTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}


export class CreateSipPhoneApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorization_name" })
  authorizationName: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server" })
  proxyServer: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server2" })
  proxyServer2?: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server3" })
  proxyServer3?: string;

  @SpeakeasyMetadata({ data: "json, name=register_server" })
  registerServer: string;

  @SpeakeasyMetadata({ data: "json, name=register_server2" })
  registerServer2?: string;

  @SpeakeasyMetadata({ data: "json, name=register_server3" })
  registerServer3?: string;

  @SpeakeasyMetadata({ data: "json, name=registration_expire_time" })
  registrationExpireTime?: number;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol" })
  transportProtocol?: CreateSipPhoneApplicationJsonTransportProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol2" })
  transportProtocol2?: CreateSipPhoneApplicationJsonTransportProtocol2Enum;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol3" })
  transportProtocol3?: CreateSipPhoneApplicationJsonTransportProtocol3Enum;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName: string;

  @SpeakeasyMetadata({ data: "json, name=voice_mail" })
  voiceMail: string;
}

export enum CreateSipPhoneMultipartFormDataTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum CreateSipPhoneMultipartFormDataTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum CreateSipPhoneMultipartFormDataTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}


export class CreateSipPhoneMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=authorization_name" })
  authorizationName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=proxy_server" })
  proxyServer: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=proxy_server2" })
  proxyServer2?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=proxy_server3" })
  proxyServer3?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=register_server" })
  registerServer: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=register_server2" })
  registerServer2?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=register_server3" })
  registerServer3?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=registration_expire_time" })
  registrationExpireTime?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=transport_protocol" })
  transportProtocol?: CreateSipPhoneMultipartFormDataTransportProtocolEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=transport_protocol2" })
  transportProtocol2?: CreateSipPhoneMultipartFormDataTransportProtocol2Enum;

  @SpeakeasyMetadata({ data: "multipart_form, name=transport_protocol3" })
  transportProtocol3?: CreateSipPhoneMultipartFormDataTransportProtocol3Enum;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_email" })
  userEmail: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_name" })
  userName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=voice_mail" })
  voiceMail: string;
}


export class CreateSipPhoneRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CreateSipPhoneApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: CreateSipPhoneMultipartFormData;
}


export class CreateSipPhoneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class CreateSipPhoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateSipPhoneRequests;

  @SpeakeasyMetadata()
  security: CreateSipPhoneSecurity;
}


export class CreateSipPhoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
