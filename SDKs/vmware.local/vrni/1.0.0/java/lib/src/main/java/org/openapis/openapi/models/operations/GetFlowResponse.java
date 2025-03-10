/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetFlowResponse {
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ApiError apiError;

    public GetFlowResponse withApiError(org.openapis.openapi.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    
    
    public String contentType;

    public GetFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.Flow flow;

    public GetFlowResponse withFlow(org.openapis.openapi.models.shared.Flow flow) {
        this.flow = flow;
        return this;
    }
    
    
    public Integer statusCode;

    public GetFlowResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetFlowResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetFlowResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
