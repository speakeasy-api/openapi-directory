package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutSubscriptionResponseTypeCreditMemo
 * Container for credit memos.
 * 
 * **Note:** This container is only available if you set the Zuora REST API minor version to 207.0 or later in the request header, and you have  [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. 
 * 
**/
public class PutSubscriptionResponseTypeCreditMemo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PutSubscriptionResponseTypeCreditMemo withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountWithoutTax")
    public Double amountWithoutTax;
    public PutSubscriptionResponseTypeCreditMemo withAmountWithoutTax(Double amountWithoutTax) {
        this.amountWithoutTax = amountWithoutTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditMemoItems")
    public PostSubscriptionPreviewCreditMemoItemsType[] creditMemoItems;
    public PutSubscriptionResponseTypeCreditMemo withCreditMemoItems(PostSubscriptionPreviewCreditMemoItemsType[] creditMemoItems) {
        this.creditMemoItems = creditMemoItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Double taxAmount;
    public PutSubscriptionResponseTypeCreditMemo withTaxAmount(Double taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
}