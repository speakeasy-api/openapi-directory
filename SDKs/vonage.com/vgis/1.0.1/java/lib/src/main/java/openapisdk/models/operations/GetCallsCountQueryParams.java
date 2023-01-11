package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallsCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetCallsCountDirectionEnum direction;
    public GetCallsCountQueryParams withDirection(GetCallsCountDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public Long fromDate;
    public GetCallsCountQueryParams withFromDate(Long fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=states")
    public GetCallsCountStatesEnum states;
    public GetCallsCountQueryParams withStates(GetCallsCountStatesEnum states) {
        this.states = states;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public Long toDate;
    public GetCallsCountQueryParams withToDate(Long toDate) {
        this.toDate = toDate;
        return this;
    }
}