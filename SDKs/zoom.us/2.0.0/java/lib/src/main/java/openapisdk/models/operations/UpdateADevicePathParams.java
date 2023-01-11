package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateADevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public UpdateADevicePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}