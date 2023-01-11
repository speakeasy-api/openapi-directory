package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetZrAccountProfile200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basic")
    public GetZrAccountProfile200ApplicationJsonBasic basic;
    public GetZrAccountProfile200ApplicationJson withBasic(GetZrAccountProfile200ApplicationJsonBasic basic) {
        this.basic = basic;
        return this;
    }
}