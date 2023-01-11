package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public Settings settings;
    public SettingsObject withSettings(Settings settings) {
        this.settings = settings;
        return this;
    }
}