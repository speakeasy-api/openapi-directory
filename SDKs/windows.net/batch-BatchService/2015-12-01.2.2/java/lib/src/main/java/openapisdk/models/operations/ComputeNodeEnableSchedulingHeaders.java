package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeEnableSchedulingHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=client-request-id")
    public String clientRequestId;
    public ComputeNodeEnableSchedulingHeaders withClientRequestId(String clientRequestId) {
        this.clientRequestId = clientRequestId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ocp-date")
    public String ocpDate;
    public ComputeNodeEnableSchedulingHeaders withOcpDate(String ocpDate) {
        this.ocpDate = ocpDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=return-client-request-id")
    public Boolean returnClientRequestId;
    public ComputeNodeEnableSchedulingHeaders withReturnClientRequestId(Boolean returnClientRequestId) {
        this.returnClientRequestId = returnClientRequestId;
        return this;
    }
}