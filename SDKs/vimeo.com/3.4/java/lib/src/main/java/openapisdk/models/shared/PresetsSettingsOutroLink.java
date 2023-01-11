package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PresetsSettingsOutroLink
 * The outro link settings. Present only if the type is `link`.
**/
public class PresetsSettingsOutroLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PresetsSettingsOutroLink withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PresetsSettingsOutroLink withUrl(String url) {
        this.url = url;
        return this;
    }
}