package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountListNodeAgentSkusHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=client-request-id")
    public String clientRequestId;
    public AccountListNodeAgentSkusHeaders withClientRequestId(String clientRequestId) {
        this.clientRequestId = clientRequestId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ocp-date")
    public String ocpDate;
    public AccountListNodeAgentSkusHeaders withOcpDate(String ocpDate) {
        this.ocpDate = ocpDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=return-client-request-id")
    public Boolean returnClientRequestId;
    public AccountListNodeAgentSkusHeaders withReturnClientRequestId(Boolean returnClientRequestId) {
        this.returnClientRequestId = returnClientRequestId;
        return this;
    }
}