package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OwnerTransfer
 * Information about an order action of type `OwnerTransfer`.
 * 
 * **Note:** The Owner Transfer feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
 * 
**/
public class OwnerTransfer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationAccountNumber")
    public String destinationAccountNumber;
    public OwnerTransfer withDestinationAccountNumber(String destinationAccountNumber) {
        this.destinationAccountNumber = destinationAccountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationInvoiceAccountNumber")
    public String destinationInvoiceAccountNumber;
    public OwnerTransfer withDestinationInvoiceAccountNumber(String destinationInvoiceAccountNumber) {
        this.destinationInvoiceAccountNumber = destinationInvoiceAccountNumber;
        return this;
    }
}