package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCallsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public ListCallsDirectionEnum direction;
    public ListCallsQueryParams withDirection(ListCallsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public Long fromDate;
    public ListCallsQueryParams withFromDate(Long fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListCallsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public ListCallsOrderEnum order;
    public ListCallsQueryParams withOrder(ListCallsOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public ListCallsQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public ListCallsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=states")
    public ListCallsStatesEnum states;
    public ListCallsQueryParams withStates(ListCallsStatesEnum states) {
        this.states = states;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public Long toDate;
    public ListCallsQueryParams withToDate(Long toDate) {
        this.toDate = toDate;
        return this;
    }
}