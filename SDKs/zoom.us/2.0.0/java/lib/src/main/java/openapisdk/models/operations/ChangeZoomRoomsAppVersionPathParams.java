package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeZoomRoomsAppVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public ChangeZoomRoomsAppVersionPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public ChangeZoomRoomsAppVersionPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}