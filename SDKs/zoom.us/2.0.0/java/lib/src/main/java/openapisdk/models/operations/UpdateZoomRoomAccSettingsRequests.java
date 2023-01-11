package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZoomRoomAccSettingsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> object;
    public UpdateZoomRoomAccSettingsRequests withObject(java.util.Map<String, Object> object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public java.util.Map<String, Object> object1;
    public UpdateZoomRoomAccSettingsRequests withObject1(java.util.Map<String, Object> object1) {
        this.object1 = object1;
        return this;
    }
}