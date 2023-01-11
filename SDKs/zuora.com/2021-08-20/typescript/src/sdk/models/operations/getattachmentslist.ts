import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAttachmentsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object-key" })
  objectKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object-type" })
  objectType: shared.GlobalRequestPageSizeEnum;
}


export class GetAttachmentsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetAttachmentsListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetAttachmentsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAttachmentsListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAttachmentsListQueryParams;

  @SpeakeasyMetadata()
  headers: GetAttachmentsListHeaders;
}


export class GetAttachmentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAttachmentsResponseType?: shared.GetAttachmentsResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
