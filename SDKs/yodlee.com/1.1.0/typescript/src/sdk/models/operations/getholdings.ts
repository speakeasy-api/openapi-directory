import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHoldingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assetClassification.classificationType" })
  assetClassificationClassificationType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classificationValue" })
  classificationValue?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerAccountId" })
  providerAccountId?: string;
}


export class GetHoldingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHoldingsQueryParams;
}


export class GetHoldingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  holdingResponse?: shared.HoldingResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
