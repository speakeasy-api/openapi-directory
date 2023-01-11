import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateASharedLineGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" })
  sharedLineGroupId: string;
}


// UpdateASharedLineGroupApplicationJsonPrimaryNumber
/** 
 * If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
**/
export class UpdateASharedLineGroupApplicationJsonPrimaryNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}

export enum UpdateASharedLineGroupApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class UpdateASharedLineGroupApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_number" })
  primaryNumber?: UpdateASharedLineGroupApplicationJsonPrimaryNumber;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateASharedLineGroupApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


// UpdateASharedLineGroupMultipartFormDataPrimaryNumber
/** 
 * If you have multiple direct phone numbers assigned to the shared line group, select a number from those numbers as the primary number. The primary number shares the same line as the extension number. This means if a caller is routed to the shared line group through an auto receptionist, the line associated with the primary number will be used. A pending number cannot be used as a Primary Number.
**/
export class UpdateASharedLineGroupMultipartFormDataPrimaryNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}

export enum UpdateASharedLineGroupMultipartFormDataStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class UpdateASharedLineGroupMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=primary_number;json=true" })
  primaryNumber?: UpdateASharedLineGroupMultipartFormDataPrimaryNumber;

  @SpeakeasyMetadata({ data: "multipart_form, name=status" })
  status?: UpdateASharedLineGroupMultipartFormDataStatusEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=timezone" })
  timezone?: string;
}


export class UpdateASharedLineGroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateASharedLineGroupApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateASharedLineGroupMultipartFormData;
}


export class UpdateASharedLineGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateASharedLineGroupPathParams;

  @SpeakeasyMetadata()
  request?: UpdateASharedLineGroupRequests;
}


export class UpdateASharedLineGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateASharedLineGroup204ApplicationJSONAny?: any;
}
