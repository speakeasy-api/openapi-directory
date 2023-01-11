package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentBankTransferCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PaymentBankTransferCode withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PaymentBankTransferCodeTypeEnum type;
    public PaymentBankTransferCode withType(PaymentBankTransferCodeTypeEnum type) {
        this.type = type;
        return this;
    }
}