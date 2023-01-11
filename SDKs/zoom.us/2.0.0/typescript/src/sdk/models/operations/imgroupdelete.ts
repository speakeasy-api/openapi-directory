import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImGroupDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ImGroupDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImGroupDeletePathParams;
}


export class ImGroupDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
