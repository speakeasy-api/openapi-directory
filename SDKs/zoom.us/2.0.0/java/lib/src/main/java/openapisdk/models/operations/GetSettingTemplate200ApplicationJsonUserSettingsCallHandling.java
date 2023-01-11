package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonUserSettingsCallHandling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_hours")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours businessHours;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandling withBusinessHours(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHours businessHours) {
        this.businessHours = businessHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_hours")
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours closeHours;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandling withCloseHours(GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingCloseHours closeHours) {
        this.closeHours = closeHours;
        return this;
    }
}