package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateApplicationJsonUserSettingsCallHandling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_hours")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours businessHours;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandling withBusinessHours(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours businessHours) {
        this.businessHours = businessHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_hours")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours closeHours;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandling withCloseHours(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours closeHours) {
        this.closeHours = closeHours;
        return this;
    }
}