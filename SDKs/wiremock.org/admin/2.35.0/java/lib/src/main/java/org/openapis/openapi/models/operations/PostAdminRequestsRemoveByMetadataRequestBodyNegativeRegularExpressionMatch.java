/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch {
    @JsonProperty("doesNotMatch")
    public String doesNotMatch;

    public PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch withDoesNotMatch(String doesNotMatch) {
        this.doesNotMatch = doesNotMatch;
        return this;
    }
    
    public PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch(@JsonProperty("doesNotMatch") String doesNotMatch) {
        this.doesNotMatch = doesNotMatch;
  }
}
