import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAmendmentsByKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=amendment-key" })
  amendmentKey: string;
}


export class GetAmendmentsByKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetAmendmentsByKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAmendmentsByKeyPathParams;

  @SpeakeasyMetadata()
  headers: GetAmendmentsByKeyHeaders;
}


export class GetAmendmentsByKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAmendmentType?: shared.GetAmendmentType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
