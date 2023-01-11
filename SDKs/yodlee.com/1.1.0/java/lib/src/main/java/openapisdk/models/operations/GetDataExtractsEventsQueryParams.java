package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataExtractsEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventName")
    public String eventName;
    public GetDataExtractsEventsQueryParams withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromDate")
    public String fromDate;
    public GetDataExtractsEventsQueryParams withFromDate(String fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toDate")
    public String toDate;
    public GetDataExtractsEventsQueryParams withToDate(String toDate) {
        this.toDate = toDate;
        return this;
    }
}