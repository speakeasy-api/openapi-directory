/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ValidationError
 * https://developer.xero.com/documentation/api/http-response-codes
 */
public class ValidationError {
    /**
     * Validation error message
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;

    public ValidationError withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public ValidationError(){}
}
