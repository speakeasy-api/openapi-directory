import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUnapplyCreditMemoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class PutUnapplyCreditMemoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutUnapplyCreditMemoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUnapplyCreditMemoPathParams;

  @SpeakeasyMetadata()
  headers: PutUnapplyCreditMemoHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UnapplyCreditMemoType;
}


export class PutUnapplyCreditMemoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
