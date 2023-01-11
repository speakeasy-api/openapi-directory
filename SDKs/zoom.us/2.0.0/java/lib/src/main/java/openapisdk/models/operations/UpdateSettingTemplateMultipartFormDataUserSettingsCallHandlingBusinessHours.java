package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_hour_action")
    public Long businessHourAction;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours withBusinessHourAction(Long businessHourAction) {
        this.businessHourAction = businessHourAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connect_to_operator")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator connectToOperator;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours withConnectToOperator(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursConnectToOperator connectToOperator) {
        this.connectToOperator = connectToOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_hours")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours[] customHours;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours withCustomHours(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours[] customHours) {
        this.customHours = customHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ring_type")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum ringType;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours withRingType(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingTypeEnum ringType) {
        this.ringType = ringType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ringing_duration")
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum ringingDuration;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours withRingingDuration(UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursRingingDurationEnum ringingDuration) {
        this.ringingDuration = ringingDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHours withType(Long type) {
        this.type = type;
        return this;
    }
}