import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignSipTrunksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AssignSipTrunksApplicationJsonSipTrunks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnis" })
  dnis?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_caller_id" })
  outboundCallerId?: string;
}


export class AssignSipTrunksApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sip_trunks", elemType: AssignSipTrunksApplicationJsonSipTrunks })
  sipTrunks?: AssignSipTrunksApplicationJsonSipTrunks[];
}


export class AssignSipTrunksMultipartFormDataSipTrunks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnis" })
  dnis?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_caller_id" })
  outboundCallerId?: string;
}


export class AssignSipTrunksMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=sip_trunks;json=true", elemType: AssignSipTrunksMultipartFormDataSipTrunks })
  sipTrunks?: AssignSipTrunksMultipartFormDataSipTrunks[];
}


export class AssignSipTrunksRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AssignSipTrunksApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AssignSipTrunksMultipartFormData1;
}


export class AssignSipTrunks201ApplicationJsonSipTrunks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnis" })
  dnis?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_prefix" })
  numberPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=sip_server_address" })
  sipServerAddress?: string;
}


export class AssignSipTrunks201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sip_trunks", elemType: AssignSipTrunks201ApplicationJsonSipTrunks })
  sipTrunks?: AssignSipTrunks201ApplicationJsonSipTrunks[];
}


export class AssignSipTrunksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignSipTrunksPathParams;

  @SpeakeasyMetadata()
  request?: AssignSipTrunksRequests;
}


export class AssignSipTrunksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignSIPTrunks201ApplicationJSONObject?: AssignSipTrunks201ApplicationJson;
}
