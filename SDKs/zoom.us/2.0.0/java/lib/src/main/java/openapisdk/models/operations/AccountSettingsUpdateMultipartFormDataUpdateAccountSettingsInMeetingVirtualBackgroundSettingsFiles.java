package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_default")
    public Boolean isDefault;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettingsFiles withType(String type) {
        this.type = type;
        return this;
    }
}