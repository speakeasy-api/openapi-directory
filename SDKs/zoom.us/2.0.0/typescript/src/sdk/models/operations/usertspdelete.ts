import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserTspDeleteTspIdEnum {
    One = "1",
    Two = "2"
}


export class UserTspDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tspId" })
  tspId: UserTspDeleteTspIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserTspDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserTspDeletePathParams;
}


export class UserTspDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
