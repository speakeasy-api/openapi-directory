package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutWriteOffInvoiceResponseCreditMemo
 * Container for the credit memo that is automatically generated when writing off invoices.
 * 
**/
public class PutWriteOffInvoiceResponseCreditMemo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PutWriteOffInvoiceResponseCreditMemo withId(String id) {
        this.id = id;
        return this;
    }
}