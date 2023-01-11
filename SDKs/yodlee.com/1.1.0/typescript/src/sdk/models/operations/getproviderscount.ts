import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProvidersCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=capability" })
  capability?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset$filter" })
  datasetDollarFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullAccountNumberFields" })
  fullAccountNumberFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=priority" })
  priority?: string;
}


export class GetProvidersCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProvidersCountQueryParams;
}


export class GetProvidersCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  providersCountResponse?: shared.ProvidersCountResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
