import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCreditMemoFromPrpcHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PostCreditMemoFromPrpcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCreditMemoFromPrpcHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostCreditMemoFromPrpcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
