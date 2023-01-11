package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
**/
public class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable")
    public Boolean enable;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum type;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator withType(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum type) {
        this.type = type;
        return this;
    }
}