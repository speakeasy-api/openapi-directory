/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ComputeNodeGetRemoteLoginSettingsResponse {
    /**
     * The error from the Batch service.
     */
    
    public org.openapis.openapi.models.shared.BatchError batchError;

    public ComputeNodeGetRemoteLoginSettingsResponse withBatchError(org.openapis.openapi.models.shared.BatchError batchError) {
        this.batchError = batchError;
        return this;
    }
    
    
    public org.openapis.openapi.models.shared.ComputeNodeGetRemoteLoginSettingsResult computeNodeGetRemoteLoginSettingsResult;

    public ComputeNodeGetRemoteLoginSettingsResponse withComputeNodeGetRemoteLoginSettingsResult(org.openapis.openapi.models.shared.ComputeNodeGetRemoteLoginSettingsResult computeNodeGetRemoteLoginSettingsResult) {
        this.computeNodeGetRemoteLoginSettingsResult = computeNodeGetRemoteLoginSettingsResult;
        return this;
    }
    
    
    public String contentType;

    public ComputeNodeGetRemoteLoginSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public java.util.Map<String, String[]> headers;

    public ComputeNodeGetRemoteLoginSettingsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    
    
    public Integer statusCode;

    public ComputeNodeGetRemoteLoginSettingsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ComputeNodeGetRemoteLoginSettingsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ComputeNodeGetRemoteLoginSettingsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
