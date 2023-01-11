package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvoiceEntityPrefix
 * Container for the prefix and starting document number of invoices.
 * 
**/
public class InvoiceEntityPrefix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public InvoiceEntityPrefix withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startNumber")
    public Long startNumber;
    public InvoiceEntityPrefix withStartNumber(Long startNumber) {
        this.startNumber = startNumber;
        return this;
    }
}