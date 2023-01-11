package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateADeviceRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateADeviceApplicationJson object;
    public UpdateADeviceRequests withObject(UpdateADeviceApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateADeviceMultipartFormData object1;
    public UpdateADeviceRequests withObject1(UpdateADeviceMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}