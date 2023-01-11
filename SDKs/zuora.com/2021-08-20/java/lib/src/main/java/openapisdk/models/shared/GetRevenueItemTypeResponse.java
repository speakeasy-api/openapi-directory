package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRevenueItemTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingPeriodEndDate")
    public LocalDate accountingPeriodEndDate;
    public GetRevenueItemTypeResponse withAccountingPeriodEndDate(LocalDate accountingPeriodEndDate) {
        this.accountingPeriodEndDate = accountingPeriodEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingPeriodName")
    public String accountingPeriodName;
    public GetRevenueItemTypeResponse withAccountingPeriodName(String accountingPeriodName) {
        this.accountingPeriodName = accountingPeriodName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingPeriodStartDate")
    public LocalDate accountingPeriodStartDate;
    public GetRevenueItemTypeResponse withAccountingPeriodStartDate(LocalDate accountingPeriodStartDate) {
        this.accountingPeriodStartDate = accountingPeriodStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public GetRevenueItemTypeResponse withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetRevenueItemTypeResponse withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAccountingPeriodClosed")
    public Boolean isAccountingPeriodClosed;
    public GetRevenueItemTypeResponse withIsAccountingPeriodClosed(Boolean isAccountingPeriodClosed) {
        this.isAccountingPeriodClosed = isAccountingPeriodClosed;
        return this;
    }
}