package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_hour_action")
    public Long businessHourAction;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours withBusinessHourAction(Long businessHourAction) {
        this.businessHourAction = businessHourAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_to_operator")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator connectToOperator;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours withConnectToOperator(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator connectToOperator) {
        this.connectToOperator = connectToOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_hours")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours[] customHours;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours withCustomHours(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours[] customHours) {
        this.customHours = customHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ring_type")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum ringType;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours withRingType(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum ringType) {
        this.ringType = ringType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ringing_duration")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum ringingDuration;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours withRingingDuration(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum ringingDuration) {
        this.ringingDuration = ringingDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours withType(Long type) {
        this.type = type;
        return this;
    }
}