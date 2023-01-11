package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayRunID")
    public String payRunID;
    public GetPayRunPathParams withPayRunId(String payRunID) {
        this.payRunID = payRunID;
        return this;
    }
}