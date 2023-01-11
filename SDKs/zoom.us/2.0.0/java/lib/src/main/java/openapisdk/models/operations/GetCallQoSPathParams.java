package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallQoSPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callId")
    public String callId;
    public GetCallQoSPathParams withCallId(String callId) {
        this.callId = callId;
        return this;
    }
}