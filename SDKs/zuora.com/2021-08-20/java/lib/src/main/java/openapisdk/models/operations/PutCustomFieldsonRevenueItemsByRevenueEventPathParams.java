package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCustomFieldsonRevenueItemsByRevenueEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event-number")
    public String eventNumber;
    public PutCustomFieldsonRevenueItemsByRevenueEventPathParams withEventNumber(String eventNumber) {
        this.eventNumber = eventNumber;
        return this;
    }
}