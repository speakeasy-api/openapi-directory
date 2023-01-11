package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSettingTemplateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddSettingTemplateApplicationJson object;
    public AddSettingTemplateRequests withObject(AddSettingTemplateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddSettingTemplateMultipartFormData object1;
    public AddSettingTemplateRequests withObject1(AddSettingTemplateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}