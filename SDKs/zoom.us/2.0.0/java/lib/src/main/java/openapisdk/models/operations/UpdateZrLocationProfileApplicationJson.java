package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateZrLocationProfileApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic")
    public UpdateZrLocationProfileApplicationJsonBasic basic;
    public UpdateZrLocationProfileApplicationJson withBasic(UpdateZrLocationProfileApplicationJsonBasic basic) {
        this.basic = basic;
        return this;
    }
}