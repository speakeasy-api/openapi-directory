package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEntityType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CreateEntityType withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("locale")
    public String locale;
    public CreateEntityType withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateEntityType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parentId")
    public String parentId;
    public CreateEntityType withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonProperty("timezone")
    public String timezone;
    public CreateEntityType withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}