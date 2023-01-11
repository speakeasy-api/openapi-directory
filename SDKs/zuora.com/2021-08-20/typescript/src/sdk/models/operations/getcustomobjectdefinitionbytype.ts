import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomObjectDefinitionByTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetCustomObjectDefinitionByTypeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Version" })
  zuoraVersion?: Date;
}


export class GetCustomObjectDefinitionByTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomObjectDefinitionByTypePathParams;

  @SpeakeasyMetadata()
  headers: GetCustomObjectDefinitionByTypeHeaders;
}


export class GetCustomObjectDefinitionByTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonErrorResponse?: shared.CommonErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customObjectDefinition?: shared.CustomObjectDefinition;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
