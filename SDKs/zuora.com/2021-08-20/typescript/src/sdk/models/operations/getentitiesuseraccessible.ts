import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEntitiesUserAccessiblePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetEntitiesUserAccessibleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetEntitiesUserAccessibleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEntitiesUserAccessiblePathParams;

  @SpeakeasyMetadata()
  headers: GetEntitiesUserAccessibleHeaders;
}


export class GetEntitiesUserAccessibleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getEntitiesUserAccessibleResponseType?: shared.GetEntitiesUserAccessibleResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
