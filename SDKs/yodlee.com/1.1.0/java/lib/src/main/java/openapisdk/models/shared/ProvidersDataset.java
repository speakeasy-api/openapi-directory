package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProvidersDataset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public Attribute[] attribute;
    public ProvidersDataset withAttribute(Attribute[] attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ProvidersDatasetNameEnum name;
    public ProvidersDataset withName(ProvidersDatasetNameEnum name) {
        this.name = name;
        return this;
    }
}