package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetZrLocationProfile200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic")
    public GetZrLocationProfile200ApplicationJsonBasic basic;
    public GetZrLocationProfile200ApplicationJson withBasic(GetZrLocationProfile200ApplicationJsonBasic basic) {
        this.basic = basic;
        return this;
    }
}