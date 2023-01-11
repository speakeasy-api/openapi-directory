package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionDays {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullAccountNumberFields")
    public TransactionDaysFullAccountNumberFieldsEnum[] fullAccountNumberFields;
    public TransactionDays withFullAccountNumberFields(TransactionDaysFullAccountNumberFieldsEnum[] fullAccountNumberFields) {
        this.fullAccountNumberFields = fullAccountNumberFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfTransactionDays")
    public Integer numberOfTransactionDays;
    public TransactionDays withNumberOfTransactionDays(Integer numberOfTransactionDays) {
        this.numberOfTransactionDays = numberOfTransactionDays;
        return this;
    }
}