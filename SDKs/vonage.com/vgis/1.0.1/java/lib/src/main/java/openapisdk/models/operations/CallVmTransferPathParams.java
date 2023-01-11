package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CallVmTransferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CallVmTransferPathParams withId(String id) {
        this.id = id;
        return this;
    }
}