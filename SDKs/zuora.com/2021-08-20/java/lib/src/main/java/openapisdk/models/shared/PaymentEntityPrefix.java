package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentEntityPrefix
 * Container for the prefix and starting number of payments.
 * 
**/
public class PaymentEntityPrefix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public PaymentEntityPrefix withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startNumber")
    public Long startNumber;
    public PaymentEntityPrefix withStartNumber(Long startNumber) {
        this.startNumber = startNumber;
        return this;
    }
}