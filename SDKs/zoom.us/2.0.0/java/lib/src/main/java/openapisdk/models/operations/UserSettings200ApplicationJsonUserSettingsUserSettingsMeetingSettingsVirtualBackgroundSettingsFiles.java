package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_default")
    public Boolean isDefault;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettingsFiles withType(String type) {
        this.type = type;
        return this;
    }
}