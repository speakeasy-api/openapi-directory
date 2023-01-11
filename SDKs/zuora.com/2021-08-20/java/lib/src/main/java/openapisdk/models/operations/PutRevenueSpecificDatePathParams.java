package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRevenueSpecificDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public PutRevenueSpecificDatePathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}