package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedNetworthHistoricalBalance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public DerivedNetworthHistoricalBalance withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asOfDate")
    public String asOfDate;
    public DerivedNetworthHistoricalBalance withAsOfDate(String asOfDate) {
        this.asOfDate = asOfDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Money balance;
    public DerivedNetworthHistoricalBalance withBalance(Money balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceType")
    public DerivedNetworthHistoricalBalanceDataSourceTypeEnum dataSourceType;
    public DerivedNetworthHistoricalBalance withDataSourceType(DerivedNetworthHistoricalBalanceDataSourceTypeEnum dataSourceType) {
        this.dataSourceType = dataSourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public DerivedNetworthHistoricalBalance withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAsset")
    public Boolean isAsset;
    public DerivedNetworthHistoricalBalance withIsAsset(Boolean isAsset) {
        this.isAsset = isAsset;
        return this;
    }
}