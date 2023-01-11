package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePayRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayRunID")
    public String payRunID;
    public UpdatePayRunPathParams withPayRunId(String payRunID) {
        this.payRunID = payRunID;
        return this;
    }
}