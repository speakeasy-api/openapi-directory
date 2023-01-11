package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRsBasicInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public PutRsBasicInfoPathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}