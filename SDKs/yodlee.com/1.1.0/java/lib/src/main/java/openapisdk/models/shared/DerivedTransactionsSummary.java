package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedTransactionsSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categorySummary")
    public DerivedCategorySummary[] categorySummary;
    public DerivedTransactionsSummary withCategorySummary(DerivedCategorySummary[] categorySummary) {
        this.categorySummary = categorySummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryType")
    public DerivedTransactionsSummaryCategoryTypeEnum categoryType;
    public DerivedTransactionsSummary withCategoryType(DerivedTransactionsSummaryCategoryTypeEnum categoryType) {
        this.categoryType = categoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTotal")
    public Money creditTotal;
    public DerivedTransactionsSummary withCreditTotal(Money creditTotal) {
        this.creditTotal = creditTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitTotal")
    public Money debitTotal;
    public DerivedTransactionsSummary withDebitTotal(Money debitTotal) {
        this.debitTotal = debitTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public DerivedTransactionsLinks links;
    public DerivedTransactionsSummary withLinks(DerivedTransactionsLinks links) {
        this.links = links;
        return this;
    }
}