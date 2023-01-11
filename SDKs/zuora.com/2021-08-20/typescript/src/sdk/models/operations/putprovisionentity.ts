import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutProvisionEntityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutProvisionEntityHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutProvisionEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutProvisionEntityPathParams;

  @SpeakeasyMetadata()
  headers: PutProvisionEntityHeaders;
}


export class PutProvisionEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  provisionEntityResponseType?: shared.ProvisionEntityResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
