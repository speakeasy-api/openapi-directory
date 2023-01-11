package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountingPeriodsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountingPeriods")
    public java.util.Map<String, Object>[] accountingPeriods;
    public GetAccountingPeriodsType withAccountingPeriods(java.util.Map<String, Object>[] accountingPeriods) {
        this.accountingPeriods = accountingPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public String nextPage;
    public GetAccountingPeriodsType withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetAccountingPeriodsType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}