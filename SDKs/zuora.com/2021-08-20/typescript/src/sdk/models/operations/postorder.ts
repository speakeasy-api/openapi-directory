import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOrderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnIds" })
  returnIds?: boolean;
}


export class PostOrderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class PostOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostOrderQueryParams;

  @SpeakeasyMetadata()
  headers: PostOrderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostOrderRequestType;
}


export class PostOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postOrderResponseType?: shared.PostOrderResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
