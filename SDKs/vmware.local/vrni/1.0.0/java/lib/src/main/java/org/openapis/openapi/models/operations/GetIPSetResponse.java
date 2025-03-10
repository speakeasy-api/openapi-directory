/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetIPSetResponse {
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ApiError apiError;

    public GetIPSetResponse withApiError(org.openapis.openapi.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.BaseIPSet baseIPSet;

    public GetIPSetResponse withBaseIPSet(org.openapis.openapi.models.shared.BaseIPSet baseIPSet) {
        this.baseIPSet = baseIPSet;
        return this;
    }
    
    
    public String contentType;

    public GetIPSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetIPSetResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetIPSetResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetIPSetResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
