package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OptionalClaim
 * Specifying the claims to be included in a token.
**/
public class OptionalClaim {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalProperties")
    public java.util.Map<String, Object> additionalProperties;
    public OptionalClaim withAdditionalProperties(java.util.Map<String, Object> additionalProperties) {
        this.additionalProperties = additionalProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("essential")
    public Boolean essential;
    public OptionalClaim withEssential(Boolean essential) {
        this.essential = essential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OptionalClaim withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public OptionalClaim withSource(String source) {
        this.source = source;
        return this;
    }
}