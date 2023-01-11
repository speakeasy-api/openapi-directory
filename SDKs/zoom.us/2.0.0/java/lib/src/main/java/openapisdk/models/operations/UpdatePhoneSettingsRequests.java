package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneSettingsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePhoneSettingsApplicationJson object;
    public UpdatePhoneSettingsRequests withObject(UpdatePhoneSettingsApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdatePhoneSettingsMultipartFormData object1;
    public UpdatePhoneSettingsRequests withObject1(UpdatePhoneSettingsMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}