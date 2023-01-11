import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderNumber" })
  orderNumber: string;
}


export class DeleteOrderHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class DeleteOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOrderPathParams;

  @SpeakeasyMetadata()
  headers: DeleteOrderHeaders;
}


export class DeleteOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
