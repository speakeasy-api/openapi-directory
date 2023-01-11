package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateId")
    public String templateId;
    public GetSettingTemplatePathParams withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}