package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteADevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public DeleteADevicePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}