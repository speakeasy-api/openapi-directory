/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class JobDisableRequest {
    /**
     * An ETag is specified. Specify this header to perform the operation only if the resource's ETag is an exact match as specified.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Match")
    public String ifMatch;

    public JobDisableRequest withIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
    
    /**
     * Specify this header to perform the operation only if the resource has been modified since the specified date/time.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;

    public JobDisableRequest withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    
    /**
     * An ETag is specified. Specify this header to perform the operation only if the resource's ETag does not match the specified ETag.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;

    public JobDisableRequest withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
    
    /**
     * Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Unmodified-Since")
    public String ifUnmodifiedSince;

    public JobDisableRequest withIfUnmodifiedSince(String ifUnmodifiedSince) {
        this.ifUnmodifiedSince = ifUnmodifiedSince;
        return this;
    }
    
    /**
     * The parameters for the request.
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.JobDisableParameter jobDisableParameter;

    public JobDisableRequest withJobDisableParameter(org.openapis.openapi.models.shared.JobDisableParameter jobDisableParameter) {
        this.jobDisableParameter = jobDisableParameter;
        return this;
    }
    
    /**
     * Client API Version.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;

    public JobDisableRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    /**
     * Caller generated request identity, in the form of a GUID with no decoration such as curly braces e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=client-request-id")
    public String clientRequestId;

    public JobDisableRequest withClientRequestId(String clientRequestId) {
        this.clientRequestId = clientRequestId;
        return this;
    }
    
    /**
     * The id of the job to disable.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;

    public JobDisableRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    
    /**
     * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ocp-date")
    public String ocpDate;

    public JobDisableRequest withOcpDate(String ocpDate) {
        this.ocpDate = ocpDate;
        return this;
    }
    
    /**
     * Specifies if the server should return the client-request-id identifier in the response.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=return-client-request-id")
    public Boolean returnClientRequestId;

    public JobDisableRequest withReturnClientRequestId(Boolean returnClientRequestId) {
        this.returnClientRequestId = returnClientRequestId;
        return this;
    }
    
    /**
     * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;

    public JobDisableRequest withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
    
    public JobDisableRequest(@JsonProperty("JobDisableParameter") org.openapis.openapi.models.shared.JobDisableParameter jobDisableParameter, @JsonProperty("api-version") String apiVersion, @JsonProperty("jobId") String jobId) {
        this.jobDisableParameter = jobDisableParameter;
        this.apiVersion = apiVersion;
        this.jobId = jobId;
  }
}
