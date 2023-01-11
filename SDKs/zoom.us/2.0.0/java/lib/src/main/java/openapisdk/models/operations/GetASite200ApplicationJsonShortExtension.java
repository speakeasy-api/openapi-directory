package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetASite200ApplicationJsonShortExtension
 * Short extension of the phone site.
**/
public class GetASite200ApplicationJsonShortExtension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public GetASite200ApplicationJsonShortExtension withLength(Long length) {
        this.length = length;
        return this;
    }
}