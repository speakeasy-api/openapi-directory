package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHistoricalBalancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountId")
    public String accountId;
    public GetHistoricalBalancesQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetHistoricalBalancesQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeCF")
    public Boolean includeCF;
    public GetHistoricalBalancesQueryParams withIncludeCf(Boolean includeCF) {
        this.includeCF = includeCF;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetHistoricalBalancesQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetHistoricalBalancesQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetHistoricalBalancesQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=top")
    public Integer top;
    public GetHistoricalBalancesQueryParams withTop(Integer top) {
        this.top = top;
        return this;
    }
}