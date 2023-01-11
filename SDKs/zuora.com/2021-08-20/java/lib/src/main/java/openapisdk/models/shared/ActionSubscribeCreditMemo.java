package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionSubscribeCreditMemo
 * Container for credit memos.
 * 
 * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
 * 
**/
public class ActionSubscribeCreditMemo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxAmount")
    public Double taxAmount;
    public ActionSubscribeCreditMemo withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalAmount")
    public Double totalAmount;
    public ActionSubscribeCreditMemo withTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalAmountWithoutTax")
    public Double totalAmountWithoutTax;
    public ActionSubscribeCreditMemo withTotalAmountWithoutTax(Double totalAmountWithoutTax) {
        this.totalAmountWithoutTax = totalAmountWithoutTax;
        return this;
    }
}