/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PostEntities200ApplicationJSON4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public PostEntities200ApplicationJSON4Payload payload;

    public PostEntities200ApplicationJSON4 withPayload(PostEntities200ApplicationJSON4Payload payload) {
        this.payload = payload;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object[] properties;

    public PostEntities200ApplicationJSON4 withProperties(Object[] properties) {
        this.properties = properties;
        return this;
    }
    
    @JsonProperty("statistics")
    public org.openapis.openapi.models.shared.Statistics statistics;

    public PostEntities200ApplicationJSON4 withStatistics(org.openapis.openapi.models.shared.Statistics statistics) {
        this.statistics = statistics;
        return this;
    }
    
    @JsonProperty("success")
    public Boolean success;

    public PostEntities200ApplicationJSON4 withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    
    public PostEntities200ApplicationJSON4(@JsonProperty("statistics") org.openapis.openapi.models.shared.Statistics statistics, @JsonProperty("success") Boolean success) {
        this.statistics = statistics;
        this.success = success;
  }
}
