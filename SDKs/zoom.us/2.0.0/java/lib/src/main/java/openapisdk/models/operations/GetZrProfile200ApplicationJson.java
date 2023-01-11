package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetZrProfile200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic")
    public GetZrProfile200ApplicationJsonBasic basic;
    public GetZrProfile200ApplicationJson withBasic(GetZrProfile200ApplicationJsonBasic basic) {
        this.basic = basic;
        return this;
    }
}