package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateZrAccProfileApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic")
    public UpdateZrAccProfileApplicationJsonBasic basic;
    public UpdateZrAccProfileApplicationJson withBasic(UpdateZrAccProfileApplicationJsonBasic basic) {
        this.basic = basic;
        return this;
    }
}