package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRevenueByRecognitionStartandEndDatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public PutRevenueByRecognitionStartandEndDatesPathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}