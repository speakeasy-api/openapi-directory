package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_hour_action")
    public Long closeHourAction;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours withCloseHourAction(Long closeHourAction) {
        this.closeHourAction = closeHourAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_to_operator")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator connectToOperator;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours withConnectToOperator(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator connectToOperator) {
        this.connectToOperator = connectToOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_wait_time")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum maxWaitTime;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHours withMaxWaitTime(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum maxWaitTime) {
        this.maxWaitTime = maxWaitTime;
        return this;
    }
}