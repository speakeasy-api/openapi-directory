package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserSettingRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateUserSettingApplicationJson object;
    public UpdateUserSettingRequests withObject(UpdateUserSettingApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateUserSettingMultipartFormData object1;
    public UpdateUserSettingRequests withObject1(UpdateUserSettingMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}