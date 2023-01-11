package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSettingTemplateMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public AddSettingTemplateMultipartFormData withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public AddSettingTemplateMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=site_id")
    public String siteId;
    public AddSettingTemplateMultipartFormData withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public AddSettingTemplateMultipartFormDataTypeEnum type;
    public AddSettingTemplateMultipartFormData withType(AddSettingTemplateMultipartFormDataTypeEnum type) {
        this.type = type;
        return this;
    }
}