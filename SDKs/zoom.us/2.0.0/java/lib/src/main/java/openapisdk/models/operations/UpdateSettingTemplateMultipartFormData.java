package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingTemplateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public UpdateSettingTemplateMultipartFormData withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UpdateSettingTemplateMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=policy,json")
    public UpdateSettingTemplateMultipartFormDataPolicy policy;
    public UpdateSettingTemplateMultipartFormData withPolicy(UpdateSettingTemplateMultipartFormDataPolicy policy) {
        this.policy = policy;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=profile,json")
    public UpdateSettingTemplateMultipartFormDataProfile profile;
    public UpdateSettingTemplateMultipartFormData withProfile(UpdateSettingTemplateMultipartFormDataProfile profile) {
        this.profile = profile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_settings,json")
    public UpdateSettingTemplateMultipartFormDataUserSettings userSettings;
    public UpdateSettingTemplateMultipartFormData withUserSettings(UpdateSettingTemplateMultipartFormDataUserSettings userSettings) {
        this.userSettings = userSettings;
        return this;
    }
}