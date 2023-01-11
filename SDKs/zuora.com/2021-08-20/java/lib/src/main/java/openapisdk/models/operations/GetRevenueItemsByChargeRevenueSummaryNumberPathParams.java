package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevenueItemsByChargeRevenueSummaryNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=crs-number")
    public String crsNumber;
    public GetRevenueItemsByChargeRevenueSummaryNumberPathParams withCrsNumber(String crsNumber) {
        this.crsNumber = crsNumber;
        return this;
    }
}