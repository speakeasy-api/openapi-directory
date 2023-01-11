package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingTemplateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSettingTemplateApplicationJson object;
    public UpdateSettingTemplateRequests withObject(UpdateSettingTemplateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateSettingTemplateMultipartFormData object1;
    public UpdateSettingTemplateRequests withObject1(UpdateSettingTemplateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}