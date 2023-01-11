package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_default")
    public Boolean isDefault;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettingsFiles withType(String type) {
        this.type = type;
        return this;
    }
}