package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSettingTemplate200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetSettingTemplate200ApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetSettingTemplate200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetSettingTemplate200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public GetSettingTemplate200ApplicationJsonPolicy policy;
    public GetSettingTemplate200ApplicationJson withPolicy(GetSettingTemplate200ApplicationJsonPolicy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public GetSettingTemplate200ApplicationJsonProfile profile;
    public GetSettingTemplate200ApplicationJson withProfile(GetSettingTemplate200ApplicationJsonProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetSettingTemplate200ApplicationJsonTypeEnum type;
    public GetSettingTemplate200ApplicationJson withType(GetSettingTemplate200ApplicationJsonTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_settings")
    public GetSettingTemplate200ApplicationJsonUserSettings userSettings;
    public GetSettingTemplate200ApplicationJson withUserSettings(GetSettingTemplate200ApplicationJsonUserSettings userSettings) {
        this.userSettings = userSettings;
        return this;
    }
}