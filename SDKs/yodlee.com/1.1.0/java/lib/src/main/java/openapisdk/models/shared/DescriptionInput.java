package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescriptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumer")
    public String consumer;
    public DescriptionInput withConsumer(String consumer) {
        this.consumer = consumer;
        return this;
    }
}