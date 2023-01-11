package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_hour_action")
    public Long closeHourAction;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours withCloseHourAction(Long closeHourAction) {
        this.closeHourAction = closeHourAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_to_operator")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator connectToOperator;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours withConnectToOperator(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursConnectToOperator connectToOperator) {
        this.connectToOperator = connectToOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_wait_time")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum maxWaitTime;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHours withMaxWaitTime(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum maxWaitTime) {
        this.maxWaitTime = maxWaitTime;
        return this;
    }
}