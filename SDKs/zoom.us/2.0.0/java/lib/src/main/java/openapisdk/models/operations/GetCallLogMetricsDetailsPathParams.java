package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallLogMetricsDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=call_id")
    public String callId;
    public GetCallLogMetricsDetailsPathParams withCallId(String callId) {
        this.callId = callId;
        return this;
    }
}