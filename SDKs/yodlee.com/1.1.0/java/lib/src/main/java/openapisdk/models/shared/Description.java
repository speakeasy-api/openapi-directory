package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Description {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumer")
    public String consumer;
    public Description withConsumer(String consumer) {
        this.consumer = consumer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original")
    public String original;
    public Description withOriginal(String original) {
        this.original = original;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("security")
    public String security;
    public Description withSecurity(String security) {
        this.security = security;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simple")
    public String simple;
    public Description withSimple(String simple) {
        this.simple = simple;
        return this;
    }
}