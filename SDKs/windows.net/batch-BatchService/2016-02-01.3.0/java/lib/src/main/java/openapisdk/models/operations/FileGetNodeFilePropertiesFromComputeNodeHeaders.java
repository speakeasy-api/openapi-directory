package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileGetNodeFilePropertiesFromComputeNodeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public FileGetNodeFilePropertiesFromComputeNodeHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Unmodified-Since")
    public String ifUnmodifiedSince;
    public FileGetNodeFilePropertiesFromComputeNodeHeaders withIfUnmodifiedSince(String ifUnmodifiedSince) {
        this.ifUnmodifiedSince = ifUnmodifiedSince;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=client-request-id")
    public String clientRequestId;
    public FileGetNodeFilePropertiesFromComputeNodeHeaders withClientRequestId(String clientRequestId) {
        this.clientRequestId = clientRequestId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ocp-date")
    public String ocpDate;
    public FileGetNodeFilePropertiesFromComputeNodeHeaders withOcpDate(String ocpDate) {
        this.ocpDate = ocpDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=return-client-request-id")
    public Boolean returnClientRequestId;
    public FileGetNodeFilePropertiesFromComputeNodeHeaders withReturnClientRequestId(Boolean returnClientRequestId) {
        this.returnClientRequestId = returnClientRequestId;
        return this;
    }
}