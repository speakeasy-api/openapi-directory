package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateId")
    public String templateId;
    public UpdateSettingTemplatePathParams withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}