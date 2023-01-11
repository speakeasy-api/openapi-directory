import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPendingCloseAccountingPeriodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ap-id" })
  apId: string;
}


export class PutPendingCloseAccountingPeriodHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutPendingCloseAccountingPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPendingCloseAccountingPeriodPathParams;

  @SpeakeasyMetadata()
  headers: PutPendingCloseAccountingPeriodHeaders;
}


export class PutPendingCloseAccountingPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
