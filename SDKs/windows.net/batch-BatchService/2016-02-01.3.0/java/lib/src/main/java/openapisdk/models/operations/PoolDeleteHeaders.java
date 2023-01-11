package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolDeleteHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Match")
    public String ifMatch;
    public PoolDeleteHeaders withIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public PoolDeleteHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public PoolDeleteHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Unmodified-Since")
    public String ifUnmodifiedSince;
    public PoolDeleteHeaders withIfUnmodifiedSince(String ifUnmodifiedSince) {
        this.ifUnmodifiedSince = ifUnmodifiedSince;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=client-request-id")
    public String clientRequestId;
    public PoolDeleteHeaders withClientRequestId(String clientRequestId) {
        this.clientRequestId = clientRequestId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ocp-date")
    public String ocpDate;
    public PoolDeleteHeaders withOcpDate(String ocpDate) {
        this.ocpDate = ocpDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=return-client-request-id")
    public Boolean returnClientRequestId;
    public PoolDeleteHeaders withReturnClientRequestId(Boolean returnClientRequestId) {
        this.returnClientRequestId = returnClientRequestId;
        return this;
    }
}