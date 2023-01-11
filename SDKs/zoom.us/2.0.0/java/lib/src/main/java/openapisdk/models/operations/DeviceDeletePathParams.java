package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeviceDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public DeviceDeletePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}