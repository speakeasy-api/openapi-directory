import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPsOperationLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category_type" })
  categoryType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;
}


export class GetPsOperationLogs200ApplicationJsonOperationLogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=category_type" })
  categoryType?: string;

  @SpeakeasyMetadata({ data: "json, name=operation_detail" })
  operationDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;
}


// GetPsOperationLogs200ApplicationJson
/** 
 * Pagination object.
**/
export class GetPsOperationLogs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operation_logs", elemType: GetPsOperationLogs200ApplicationJsonOperationLogs })
  operationLogs?: GetPsOperationLogs200ApplicationJsonOperationLogs[];

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class GetPsOperationLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPsOperationLogsQueryParams;
}


export class GetPsOperationLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPSOperationLogs200ApplicationJSONObject?: GetPsOperationLogs200ApplicationJson;
}
