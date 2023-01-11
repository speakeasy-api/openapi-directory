package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedMemberTypes")
    public String[] allowedMemberTypes;
    public AppRole withAllowedMemberTypes(String[] allowedMemberTypes) {
        this.allowedMemberTypes = allowedMemberTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AppRole withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AppRole withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AppRole withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEnabled")
    public Boolean isEnabled;
    public AppRole withIsEnabled(Boolean isEnabled) {
        this.isEnabled = isEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public AppRole withValue(String value) {
        this.value = value;
        return this;
    }
}