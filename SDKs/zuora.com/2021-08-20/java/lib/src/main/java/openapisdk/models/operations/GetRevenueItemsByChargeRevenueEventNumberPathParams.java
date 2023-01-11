package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueItemsByChargeRevenueEventNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event-number")
    public String eventNumber;
    public GetRevenueItemsByChargeRevenueEventNumberPathParams withEventNumber(String eventNumber) {
        this.eventNumber = eventNumber;
        return this;
    }
}