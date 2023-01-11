package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rs-number")
    public String rsNumber;
    public DeleteRsPathParams withRsNumber(String rsNumber) {
        this.rsNumber = rsNumber;
        return this;
    }
}