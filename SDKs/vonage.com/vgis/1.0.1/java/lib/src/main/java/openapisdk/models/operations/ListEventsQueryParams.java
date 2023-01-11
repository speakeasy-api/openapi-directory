package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public ListEventsDirectionEnum direction;
    public ListEventsQueryParams withDirection(ListEventsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public Long fromDate;
    public ListEventsQueryParams withFromDate(Long fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListEventsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public ListEventsOrderEnum order;
    public ListEventsQueryParams withOrder(ListEventsOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public ListEventsQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public ListEventsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=states")
    public ListEventsStatesEnum states;
    public ListEventsQueryParams withStates(ListEventsStatesEnum states) {
        this.states = states;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public Long toDate;
    public ListEventsQueryParams withToDate(Long toDate) {
        this.toDate = toDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=types")
    public ListEventsTypesEnum types;
    public ListEventsQueryParams withTypes(ListEventsTypesEnum types) {
        this.types = types;
        return this;
    }
}