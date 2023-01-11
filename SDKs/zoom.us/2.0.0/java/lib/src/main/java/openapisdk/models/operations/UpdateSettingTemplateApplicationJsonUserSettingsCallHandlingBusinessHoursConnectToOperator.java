package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
public class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum type;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator withType(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum type) {
        this.type = type;
        return this;
    }
}