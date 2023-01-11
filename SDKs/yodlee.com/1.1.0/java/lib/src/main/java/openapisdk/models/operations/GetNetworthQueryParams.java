package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=accountIds")
    public String accountIds;
    public GetNetworthQueryParams withAccountIds(String accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=container")
    public String container;
    public GetNetworthQueryParams withContainer(String container) {
        this.container = container;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetNetworthQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetNetworthQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetNetworthQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetNetworthQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetNetworthQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=top")
    public Integer top;
    public GetNetworthQueryParams withTop(Integer top) {
        this.top = top;
        return this;
    }
}