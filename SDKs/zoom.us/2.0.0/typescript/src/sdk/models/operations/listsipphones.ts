import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSipPhonesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_key" })
  searchKey?: string;
}


export class ListSipPhonesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}

export enum ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum {
    Udp = "UDP",
    Tcp = "TCP",
    Tls = "TLS",
    Auto = "AUTO"
}


export class ListSipPhones200ApplicationJsonPhones extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorization_name" })
  authorizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server" })
  proxyServer?: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server2" })
  proxyServer2?: string;

  @SpeakeasyMetadata({ data: "json, name=proxy_server3" })
  proxyServer3?: string;

  @SpeakeasyMetadata({ data: "json, name=register_server" })
  registerServer?: string;

  @SpeakeasyMetadata({ data: "json, name=register_server2" })
  registerServer2?: string;

  @SpeakeasyMetadata({ data: "json, name=register_server3" })
  registerServer3?: string;

  @SpeakeasyMetadata({ data: "json, name=registration_expire_time" })
  registrationExpireTime?: number;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol" })
  transportProtocol?: ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol2" })
  transportProtocol2?: ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum;

  @SpeakeasyMetadata({ data: "json, name=transport_protocol3" })
  transportProtocol3?: ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=voice_mail" })
  voiceMail?: string;
}


export class ListSipPhones200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=phones", elemType: ListSipPhones200ApplicationJsonPhones })
  phones?: ListSipPhones200ApplicationJsonPhones[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListSipPhonesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSipPhonesQueryParams;

  @SpeakeasyMetadata()
  security: ListSipPhonesSecurity;
}


export class ListSipPhonesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSipPhones200ApplicationJSONObject?: ListSipPhones200ApplicationJson;
}
