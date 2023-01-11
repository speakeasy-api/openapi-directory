package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedCategorySummaryDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTotal")
    public Money creditTotal;
    public DerivedCategorySummaryDetails withCreditTotal(Money creditTotal) {
        this.creditTotal = creditTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public DerivedCategorySummaryDetails withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitTotal")
    public Money debitTotal;
    public DerivedCategorySummaryDetails withDebitTotal(Money debitTotal) {
        this.debitTotal = debitTotal;
        return this;
    }
}