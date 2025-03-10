/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FileGetFromComputeNodeRequest {
    /**
     * Specify this header to perform the operation only if the resource has been modified since the specified date/time.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;

    public FileGetFromComputeNodeRequest withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    
    /**
     * Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Unmodified-Since")
    public String ifUnmodifiedSince;

    public FileGetFromComputeNodeRequest withIfUnmodifiedSince(String ifUnmodifiedSince) {
        this.ifUnmodifiedSince = ifUnmodifiedSince;
        return this;
    }
    
    /**
     * Client API Version.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;

    public FileGetFromComputeNodeRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    /**
     * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=client-request-id")
    public String clientRequestId;

    public FileGetFromComputeNodeRequest withClientRequestId(String clientRequestId) {
        this.clientRequestId = clientRequestId;
        return this;
    }
    
    /**
     * The path to the task file that you want to get the content of.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileName")
    public String fileName;

    public FileGetFromComputeNodeRequest withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    
    /**
     * The id of the compute node that contains the file.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;

    public FileGetFromComputeNodeRequest withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    
    /**
     * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ocp-date")
    public String ocpDate;

    public FileGetFromComputeNodeRequest withOcpDate(String ocpDate) {
        this.ocpDate = ocpDate;
        return this;
    }
    
    /**
     * The byte range to be retrieved. The default is to retrieve the entire file. The format is startRange-endRange.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=ocp-range")
    public String ocpRange;

    public FileGetFromComputeNodeRequest withOcpRange(String ocpRange) {
        this.ocpRange = ocpRange;
        return this;
    }
    
    /**
     * The id of the pool that contains the compute node.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;

    public FileGetFromComputeNodeRequest withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
    
    /**
     * Whether the server should return the client-request-id identifier in the response.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=return-client-request-id")
    public Boolean returnClientRequestId;

    public FileGetFromComputeNodeRequest withReturnClientRequestId(Boolean returnClientRequestId) {
        this.returnClientRequestId = returnClientRequestId;
        return this;
    }
    
    /**
     * The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;

    public FileGetFromComputeNodeRequest withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
    
    public FileGetFromComputeNodeRequest(@JsonProperty("api-version") String apiVersion, @JsonProperty("fileName") String fileName, @JsonProperty("nodeId") String nodeId, @JsonProperty("poolId") String poolId) {
        this.apiVersion = apiVersion;
        this.fileName = fileName;
        this.nodeId = nodeId;
        this.poolId = poolId;
  }
}
