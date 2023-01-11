package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetASite200ApplicationJsonCountry
 * Site country
**/
public class GetASite200ApplicationJsonCountry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetASite200ApplicationJsonCountry withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetASite200ApplicationJsonCountry withName(String name) {
        this.name = name;
        return this;
    }
}