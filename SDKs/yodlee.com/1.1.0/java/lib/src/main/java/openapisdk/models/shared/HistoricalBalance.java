package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HistoricalBalance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asOfDate")
    public String asOfDate;
    public HistoricalBalance withAsOfDate(String asOfDate) {
        this.asOfDate = asOfDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Money balance;
    public HistoricalBalance withBalance(Money balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceType")
    public HistoricalBalanceDataSourceTypeEnum dataSourceType;
    public HistoricalBalance withDataSourceType(HistoricalBalanceDataSourceTypeEnum dataSourceType) {
        this.dataSourceType = dataSourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public HistoricalBalance withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAsset")
    public Boolean isAsset;
    public HistoricalBalance withIsAsset(Boolean isAsset) {
        this.isAsset = isAsset;
        return this;
    }
}