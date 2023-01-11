import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTaxationItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTaxationItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetTaxationItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaxationItemPathParams;

  @SpeakeasyMetadata()
  headers: GetTaxationItemHeaders;
}


export class GetTaxationItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTaxationItemType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
