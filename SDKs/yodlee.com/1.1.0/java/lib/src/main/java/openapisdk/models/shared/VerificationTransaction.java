package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VerificationTransaction {
    @JsonProperty("amount")
    public Money amount;
    public VerificationTransaction withAmount(Money amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("baseType")
    public VerificationTransactionBaseTypeEnum baseType;
    public VerificationTransaction withBaseType(VerificationTransactionBaseTypeEnum baseType) {
        this.baseType = baseType;
        return this;
    }
}