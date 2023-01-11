package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProvidersDatasetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public AttributeInput[] attribute;
    public ProvidersDatasetInput withAttribute(AttributeInput[] attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ProvidersDatasetNameEnum name;
    public ProvidersDatasetInput withName(ProvidersDatasetNameEnum name) {
        this.name = name;
        return this;
    }
}