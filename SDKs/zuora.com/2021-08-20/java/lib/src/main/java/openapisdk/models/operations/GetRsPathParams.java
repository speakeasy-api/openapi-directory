package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public GetRsPathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}