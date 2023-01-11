package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyTransactionCriteriaInput {
    @JsonProperty("amount")
    public Double amount;
    public VerifyTransactionCriteriaInput withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseType")
    public VerifyTransactionCriteriaBaseTypeEnum baseType;
    public VerifyTransactionCriteriaInput withBaseType(VerifyTransactionCriteriaBaseTypeEnum baseType) {
        this.baseType = baseType;
        return this;
    }
    @JsonProperty("date")
    public String date;
    public VerifyTransactionCriteriaInput withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateVariance")
    public String dateVariance;
    public VerifyTransactionCriteriaInput withDateVariance(String dateVariance) {
        this.dateVariance = dateVariance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyword")
    public String keyword;
    public VerifyTransactionCriteriaInput withKeyword(String keyword) {
        this.keyword = keyword;
        return this;
    }
}