package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_hour_action")
    public Long closeHourAction;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours withCloseHourAction(Long closeHourAction) {
        this.closeHourAction = closeHourAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_to_operator")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator connectToOperator;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours withConnectToOperator(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursConnectToOperator connectToOperator) {
        this.connectToOperator = connectToOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_wait_time")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum maxWaitTime;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours withMaxWaitTime(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum maxWaitTime) {
        this.maxWaitTime = maxWaitTime;
        return this;
    }
}