package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRevenueAcrossApPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public PutRevenueAcrossApPathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}