import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUpdateCustomObjectDefinitionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Version" })
  zuoraVersion?: Date;
}


export class PostUpdateCustomObjectDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostUpdateCustomObjectDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MigrationUpdateCustomObjectDefinitionsRequest;
}


export class PostUpdateCustomObjectDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  migrationUpdateCustomObjectDefinitionsResponse?: shared.MigrationUpdateCustomObjectDefinitionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
