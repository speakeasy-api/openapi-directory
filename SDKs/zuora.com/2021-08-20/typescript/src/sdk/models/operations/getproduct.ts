import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product-id" })
  productId: string;
}


export class GetProductHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class GetProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProductPathParams;

  @SpeakeasyMetadata()
  headers: GetProductHeaders;
}


export class GetProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getProductType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
