/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DeleteReviewResponse {
    
    public String contentType;

    public DeleteReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public Boolean deleteReview200ApplicationJSONBoolean;

    public DeleteReviewResponse withDeleteReview200ApplicationJSONBoolean(Boolean deleteReview200ApplicationJSONBoolean) {
        this.deleteReview200ApplicationJSONBoolean = deleteReview200ApplicationJSONBoolean;
        return this;
    }
    
    
    public Integer statusCode;

    public DeleteReviewResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DeleteReviewResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DeleteReviewResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
