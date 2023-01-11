import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeviceListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class DeviceListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum {
    Auto = "auto",
    Yes = "yes",
    No = "no"
}

export enum DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum {
    H323 = "H.323",
    Sip = "SIP"
}


// DeviceListH323SipDeviceListTheH323SipDeviceObject
/** 
 * The H.323/SIP device object.
**/
export class DeviceListH323SipDeviceListTheH323SipDeviceObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryption" })
  encryption: DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum;
}


// DeviceListH323SipDeviceList
/** 
 * Pagination Object.
**/
export class DeviceListH323SipDeviceList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: DeviceListH323SipDeviceListTheH323SipDeviceObject })
  devices?: DeviceListH323SipDeviceListTheH323SipDeviceObject[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DeviceListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeviceListQueryParams;

  @SpeakeasyMetadata()
  security: DeviceListSecurity;
}


export class DeviceListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  h323SIPDeviceList?: DeviceListH323SipDeviceList;

  @SpeakeasyMetadata()
  statusCode: number;
}
