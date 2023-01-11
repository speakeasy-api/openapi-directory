package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeviceUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public DeviceUpdatePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}