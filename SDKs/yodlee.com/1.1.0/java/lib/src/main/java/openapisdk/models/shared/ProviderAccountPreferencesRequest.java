package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderAccountPreferencesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public ProviderAccountPreferences preferences;
    public ProviderAccountPreferencesRequest withPreferences(ProviderAccountPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
}