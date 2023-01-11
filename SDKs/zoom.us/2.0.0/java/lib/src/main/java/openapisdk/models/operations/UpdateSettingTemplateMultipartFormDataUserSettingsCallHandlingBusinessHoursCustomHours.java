package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekday")
    public Long weekday;
    public UpdateSettingTemplateMultipartFormDataUserSettingsCallHandlingBusinessHoursCustomHours withWeekday(Long weekday) {
        this.weekday = weekday;
        return this;
    }
}