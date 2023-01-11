package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserSettingRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddUserSettingApplicationJson object;
    public AddUserSettingRequests withObject(AddUserSettingApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddUserSettingMultipartFormData object1;
    public AddUserSettingRequests withObject1(AddUserSettingMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}