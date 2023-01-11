package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_default")
    public Boolean isDefault;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withType(String type) {
        this.type = type;
        return this;
    }
}