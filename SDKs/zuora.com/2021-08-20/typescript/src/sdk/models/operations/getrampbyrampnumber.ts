import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRampByRampNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rampNumber" })
  rampNumber: string;
}


export class GetRampByRampNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRampByRampNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRampByRampNumberPathParams;

  @SpeakeasyMetadata()
  headers: GetRampByRampNumberHeaders;
}


export class GetRampByRampNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRampByRampNumberResponseType?: shared.GetRampByRampNumberResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
