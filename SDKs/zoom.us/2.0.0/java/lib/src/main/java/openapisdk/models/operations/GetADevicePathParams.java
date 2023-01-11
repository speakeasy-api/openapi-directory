package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetADevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public GetADevicePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}