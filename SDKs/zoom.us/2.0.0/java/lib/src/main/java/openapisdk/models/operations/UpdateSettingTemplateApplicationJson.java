package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSettingTemplateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateSettingTemplateApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateSettingTemplateApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public UpdateSettingTemplateApplicationJsonPolicy policy;
    public UpdateSettingTemplateApplicationJson withPolicy(UpdateSettingTemplateApplicationJsonPolicy policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public UpdateSettingTemplateApplicationJsonProfile profile;
    public UpdateSettingTemplateApplicationJson withProfile(UpdateSettingTemplateApplicationJsonProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_settings")
    public UpdateSettingTemplateApplicationJsonUserSettings userSettings;
    public UpdateSettingTemplateApplicationJson withUserSettings(UpdateSettingTemplateApplicationJsonUserSettings userSettings) {
        this.userSettings = userSettings;
        return this;
    }
}