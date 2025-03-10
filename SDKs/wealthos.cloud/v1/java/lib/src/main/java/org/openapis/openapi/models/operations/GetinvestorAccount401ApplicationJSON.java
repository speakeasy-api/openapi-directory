/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetinvestorAccount401ApplicationJSON - You do not have permissions to access this resource.
 */
public class GetinvestorAccount401ApplicationJSON {
    /**
     * Optional error code
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_code")
    public String errorCode;

    public GetinvestorAccount401ApplicationJSON withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    /**
     * Human readable description of the error
     */
    @JsonProperty("message")
    public String message;

    public GetinvestorAccount401ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public GetinvestorAccount401ApplicationJSON(@JsonProperty("message") String message) {
        this.message = message;
  }
}
