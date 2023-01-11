package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSettingTemplates200ApplicationJsonTemplates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ListSettingTemplates200ApplicationJsonTemplates withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListSettingTemplates200ApplicationJsonTemplates withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListSettingTemplates200ApplicationJsonTemplates withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListSettingTemplates200ApplicationJsonTemplatesTypeEnum type;
    public ListSettingTemplates200ApplicationJsonTemplates withType(ListSettingTemplates200ApplicationJsonTemplatesTypeEnum type) {
        this.type = type;
        return this;
    }
}