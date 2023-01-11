import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}


export class DeviceDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeviceDeletePathParams;
}


export class DeviceDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
