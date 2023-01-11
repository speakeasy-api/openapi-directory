package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
public class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum type;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator withType(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum type) {
        this.type = type;
        return this;
    }
}