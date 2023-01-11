package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllCustomObjectDefinitionsInNamespaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetAllCustomObjectDefinitionsInNamespaceResponse withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definitions")
    public java.util.Map<String, CustomObjectDefinition> definitions;
    public GetAllCustomObjectDefinitionsInNamespaceResponse withDefinitions(java.util.Map<String, CustomObjectDefinition> definitions) {
        this.definitions = definitions;
        return this;
    }
}