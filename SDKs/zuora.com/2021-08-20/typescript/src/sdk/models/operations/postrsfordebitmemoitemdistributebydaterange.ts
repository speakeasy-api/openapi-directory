import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRSforDebitMemoItemDistributeByDateRangePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dmi-id" })
  dmiId: string;
}


export class PostRSforDebitMemoItemDistributeByDateRangeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRSforDebitMemoItemDistributeByDateRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRSforDebitMemoItemDistributeByDateRangePathParams;

  @SpeakeasyMetadata()
  headers: PostRSforDebitMemoItemDistributeByDateRangeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostRSforDebitMemoItemDistributeByDateRangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
