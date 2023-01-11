package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_hour_action")
    public Long businessHourAction;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours withBusinessHourAction(Long businessHourAction) {
        this.businessHourAction = businessHourAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_to_operator")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator connectToOperator;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours withConnectToOperator(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursConnectToOperator connectToOperator) {
        this.connectToOperator = connectToOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_hours")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours[] customHours;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours withCustomHours(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours[] customHours) {
        this.customHours = customHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ring_type")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum ringType;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours withRingType(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingTypeEnum ringType) {
        this.ringType = ringType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ringing_duration")
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum ringingDuration;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours withRingingDuration(UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHoursRingingDurationEnum ringingDuration) {
        this.ringingDuration = ringingDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public UpdateSettingTemplateApplicationJsonUserSettingsCallHandlingBusinessHours withType(Long type) {
        this.type = type;
        return this;
    }
}