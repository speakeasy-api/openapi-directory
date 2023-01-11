package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public PutCustomFieldsonRevenueItemsByRevenueSchedulePathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}