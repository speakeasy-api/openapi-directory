import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCrsByChargeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=charge-key" })
  chargeKey: string;
}


export class GetCrsByChargeIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetCrsByChargeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCrsByChargeIdPathParams;

  @SpeakeasyMetadata()
  headers: GetCrsByChargeIdHeaders;
}


export class GetCrsByChargeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChargeRSDetailType?: shared.GetChargeRsDetailType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
