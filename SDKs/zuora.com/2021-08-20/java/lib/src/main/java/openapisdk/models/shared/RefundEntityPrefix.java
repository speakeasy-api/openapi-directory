package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefundEntityPrefix
 * Container for the prefix and starting number of refunds.
 * 
**/
public class RefundEntityPrefix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public RefundEntityPrefix withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startNumber")
    public Long startNumber;
    public RefundEntityPrefix withStartNumber(Long startNumber) {
        this.startNumber = startNumber;
        return this;
    }
}