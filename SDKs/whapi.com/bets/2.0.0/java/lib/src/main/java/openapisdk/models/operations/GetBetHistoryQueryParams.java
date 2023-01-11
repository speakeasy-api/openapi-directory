package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBetHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateFrom")
    public String dateFrom;
    public GetBetHistoryQueryParams withDateFrom(String dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateTo")
    public String dateTo;
    public GetBetHistoryQueryParams withDateTo(String dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=exclude")
    public String[] exclude;
    public GetBetHistoryQueryParams withExclude(String[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public String[] fields;
    public GetBetHistoryQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=include")
    public String[] include;
    public GetBetHistoryQueryParams withInclude(String[] include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetBetHistoryQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Double pageSize;
    public GetBetHistoryQueryParams withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=settled")
    public Boolean settled;
    public GetBetHistoryQueryParams withSettled(Boolean settled) {
        this.settled = settled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetBetHistoryQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}