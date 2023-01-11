package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyTransactionCriteria {
    @JsonProperty("amount")
    public Double amount;
    public VerifyTransactionCriteria withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseType")
    public VerifyTransactionCriteriaBaseTypeEnum baseType;
    public VerifyTransactionCriteria withBaseType(VerifyTransactionCriteriaBaseTypeEnum baseType) {
        this.baseType = baseType;
        return this;
    }
    @JsonProperty("date")
    public String date;
    public VerifyTransactionCriteria withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateVariance")
    public String dateVariance;
    public VerifyTransactionCriteria withDateVariance(String dateVariance) {
        this.dateVariance = dateVariance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyword")
    public String keyword;
    public VerifyTransactionCriteria withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matched")
    public VerifyTransactionCriteriaMatchedEnum matched;
    public VerifyTransactionCriteria withMatched(VerifyTransactionCriteriaMatchedEnum matched) {
        this.matched = matched;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedTransaction")
    public Transaction[] verifiedTransaction;
    public VerifyTransactionCriteria withVerifiedTransaction(Transaction[] verifiedTransaction) {
        this.verifiedTransaction = verifiedTransaction;
        return this;
    }
}