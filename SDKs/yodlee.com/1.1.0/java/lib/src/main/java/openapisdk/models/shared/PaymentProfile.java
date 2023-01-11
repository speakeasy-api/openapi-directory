package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public AccountAddress[] address;
    public PaymentProfile withAddress(AccountAddress[] address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public PaymentIdentifier identifier;
    public PaymentProfile withIdentifier(PaymentIdentifier identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentBankTransferCode")
    public PaymentBankTransferCode paymentBankTransferCode;
    public PaymentProfile withPaymentBankTransferCode(PaymentBankTransferCode paymentBankTransferCode) {
        this.paymentBankTransferCode = paymentBankTransferCode;
        return this;
    }
}