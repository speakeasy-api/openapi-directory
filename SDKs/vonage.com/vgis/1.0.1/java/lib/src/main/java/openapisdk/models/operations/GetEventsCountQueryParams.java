package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetEventsCountDirectionEnum direction;
    public GetEventsCountQueryParams withDirection(GetEventsCountDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public Long fromDate;
    public GetEventsCountQueryParams withFromDate(Long fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=states")
    public GetEventsCountStatesEnum states;
    public GetEventsCountQueryParams withStates(GetEventsCountStatesEnum states) {
        this.states = states;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public Long toDate;
    public GetEventsCountQueryParams withToDate(Long toDate) {
        this.toDate = toDate;
        return this;
    }
}