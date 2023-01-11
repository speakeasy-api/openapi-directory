import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHoldingSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountIds" })
  accountIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classificationType" })
  classificationType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetHoldingSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHoldingSummaryQueryParams;
}


export class GetHoldingSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  derivedHoldingSummaryResponse?: shared.DerivedHoldingSummaryResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
