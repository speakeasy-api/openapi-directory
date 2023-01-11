import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRSforDebitMemoItemManualDistributionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dmi-id" })
  dmiId: string;
}


export class PostRSforDebitMemoItemManualDistributionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRSforDebitMemoItemManualDistributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRSforDebitMemoItemManualDistributionPathParams;

  @SpeakeasyMetadata()
  headers: PostRSforDebitMemoItemManualDistributionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostRSforDebitMemoItemManualDistributionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
