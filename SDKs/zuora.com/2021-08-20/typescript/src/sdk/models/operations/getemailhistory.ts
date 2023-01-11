import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmailHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventCategory" })
  eventCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failedOnly" })
  failedOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: Date;
}


export class GetEmailHistoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetEmailHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEmailHistoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetEmailHistoryHeaders;
}


export class GetEmailHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getEmailHistoryVOsType?: shared.GetEmailHistoryVOsType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
