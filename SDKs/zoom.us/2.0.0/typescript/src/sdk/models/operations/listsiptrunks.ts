import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSipTrunksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class ListSipTrunks200ApplicationJsonSipTrunks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnis" })
  dnis?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_prefix" })
  numberPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_caller_id" })
  outboundCallerId?: string;

  @SpeakeasyMetadata({ data: "json, name=sip_server_address" })
  sipServerAddress?: string;
}


export class ListSipTrunks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sip_trunks", elemType: ListSipTrunks200ApplicationJsonSipTrunks })
  sipTrunks?: ListSipTrunks200ApplicationJsonSipTrunks[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListSipTrunksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListSipTrunksPathParams;
}


export class ListSipTrunksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSIPTrunks200ApplicationJSONObject?: ListSipTrunks200ApplicationJson;
}
