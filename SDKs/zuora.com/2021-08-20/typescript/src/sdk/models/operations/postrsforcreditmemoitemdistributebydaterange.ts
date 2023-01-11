import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRSforCreditMemoItemDistributeByDateRangePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cmi-id" })
  cmiId: string;
}


export class PostRSforCreditMemoItemDistributeByDateRangeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRSforCreditMemoItemDistributeByDateRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRSforCreditMemoItemDistributeByDateRangePathParams;

  @SpeakeasyMetadata()
  headers: PostRSforCreditMemoItemDistributeByDateRangeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostRSforCreditMemoItemDistributeByDateRangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
