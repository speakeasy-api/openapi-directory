package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskAddHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=client-request-id")
    public String clientRequestId;
    public TaskAddHeaders withClientRequestId(String clientRequestId) {
        this.clientRequestId = clientRequestId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ocp-date")
    public String ocpDate;
    public TaskAddHeaders withOcpDate(String ocpDate) {
        this.ocpDate = ocpDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=return-client-request-id")
    public Boolean returnClientRequestId;
    public TaskAddHeaders withReturnClientRequestId(Boolean returnClientRequestId) {
        this.returnClientRequestId = returnClientRequestId;
        return this;
    }
}