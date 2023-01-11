package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueEventForRevenueSchedulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public GetRevenueEventForRevenueSchedulePathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}