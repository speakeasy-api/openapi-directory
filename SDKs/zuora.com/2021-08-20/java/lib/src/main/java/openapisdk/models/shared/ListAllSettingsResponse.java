package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public SettingItemWithOperationsInformation[] settings;
    public ListAllSettingsResponse withSettings(SettingItemWithOperationsInformation[] settings) {
        this.settings = settings;
        return this;
    }
}