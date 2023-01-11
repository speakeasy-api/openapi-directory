package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrLocationSettingsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> object;
    public UpdateZrLocationSettingsRequests withObject(java.util.Map<String, Object> object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public java.util.Map<String, Object> object1;
    public UpdateZrLocationSettingsRequests withObject1(java.util.Map<String, Object> object1) {
        this.object1 = object1;
        return this;
    }
}