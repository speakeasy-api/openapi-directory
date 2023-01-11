package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneSettingsMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=byoc,json")
    public UpdatePhoneSettingsMultipartFormDataByoc byoc;
    public UpdatePhoneSettingsMultipartFormData withByoc(UpdatePhoneSettingsMultipartFormDataByoc byoc) {
        this.byoc = byoc;
        return this;
    }
}