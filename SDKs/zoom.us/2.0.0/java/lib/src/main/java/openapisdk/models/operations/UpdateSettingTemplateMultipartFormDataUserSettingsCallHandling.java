package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_hours")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours businessHours;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling withBusinessHours(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours businessHours) {
        this.businessHours = businessHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_hours")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours closeHours;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandling withCloseHours(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours closeHours) {
        this.closeHours = closeHours;
        return this;
    }
}