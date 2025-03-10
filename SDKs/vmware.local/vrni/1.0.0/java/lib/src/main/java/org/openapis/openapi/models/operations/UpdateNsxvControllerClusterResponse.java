/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class UpdateNsxvControllerClusterResponse {
    /**
     * Bad Request
     */
    
    public org.openapis.openapi.models.shared.ApiError apiError;

    public UpdateNsxvControllerClusterResponse withApiError(org.openapis.openapi.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    
    
    public String contentType;

    public UpdateNsxvControllerClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.NSXControllerDataCollection nsxControllerDataCollection;

    public UpdateNsxvControllerClusterResponse withNSXControllerDataCollection(org.openapis.openapi.models.shared.NSXControllerDataCollection nsxControllerDataCollection) {
        this.nsxControllerDataCollection = nsxControllerDataCollection;
        return this;
    }
    
    
    public Integer statusCode;

    public UpdateNsxvControllerClusterResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public UpdateNsxvControllerClusterResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public UpdateNsxvControllerClusterResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
