package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueItemsByRevenueSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public GetRevenueItemsByRevenueSchedulePathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}