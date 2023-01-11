package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekday")
    public Long weekday;
    public GetSettingTemplate200ApplicationJsonUserSettingsCallHandlingBusinessHoursCustomHours withWeekday(Long weekday) {
        this.weekday = weekday;
        return this;
    }
}