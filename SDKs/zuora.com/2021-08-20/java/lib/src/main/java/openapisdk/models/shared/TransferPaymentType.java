package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransferPaymentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public TransferPaymentType withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}