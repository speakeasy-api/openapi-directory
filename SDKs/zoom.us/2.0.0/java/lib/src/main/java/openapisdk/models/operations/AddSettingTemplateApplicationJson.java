package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddSettingTemplateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AddSettingTemplateApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AddSettingTemplateApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public AddSettingTemplateApplicationJson withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonProperty("type")
    public AddSettingTemplateApplicationJsonTypeEnum type;
    public AddSettingTemplateApplicationJson withType(AddSettingTemplateApplicationJsonTypeEnum type) {
        this.type = type;
        return this;
    }
}