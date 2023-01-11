package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueEventDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event-number")
    public String eventNumber;
    public GetRevenueEventDetailsPathParams withEventNumber(String eventNumber) {
        this.eventNumber = eventNumber;
        return this;
    }
}