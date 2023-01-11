package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedCategorySummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public Long categoryId;
    public DerivedCategorySummary withCategoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryName")
    public String categoryName;
    public DerivedCategorySummary withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTotal")
    public Money creditTotal;
    public DerivedCategorySummary withCreditTotal(Money creditTotal) {
        this.creditTotal = creditTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitTotal")
    public Money debitTotal;
    public DerivedCategorySummary withDebitTotal(Money debitTotal) {
        this.debitTotal = debitTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public DerivedCategorySummaryDetails[] details;
    public DerivedCategorySummary withDetails(DerivedCategorySummaryDetails[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public DerivedTransactionsLinks links;
    public DerivedCategorySummary withLinks(DerivedTransactionsLinks links) {
        this.links = links;
        return this;
    }
}