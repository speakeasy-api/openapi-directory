import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCrsByCrsNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=crs-number" })
  crsNumber: string;
}


export class GetCrsByCrsNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetCrsByCrsNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCrsByCrsNumberPathParams;

  @SpeakeasyMetadata()
  headers: GetCrsByCrsNumberHeaders;
}


export class GetCrsByCrsNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChargeRSDetailType?: shared.GetChargeRsDetailType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
