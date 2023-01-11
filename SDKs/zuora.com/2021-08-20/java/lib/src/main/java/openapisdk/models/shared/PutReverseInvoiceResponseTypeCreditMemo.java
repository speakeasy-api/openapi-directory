package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutReverseInvoiceResponseTypeCreditMemo
 * Container for the credit memo that is auto-generated when reversing invoices.
 * 
**/
public class PutReverseInvoiceResponseTypeCreditMemo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PutReverseInvoiceResponseTypeCreditMemo withId(String id) {
        this.id = id;
        return this;
    }
}