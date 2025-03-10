/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostAdminRecordingsStop200ApplicationJSON - Successfully stopped recording
 */
public class PostAdminRecordingsStop200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappings")
    public PostAdminRecordingsStop200ApplicationJSONMappings[] mappings;

    public PostAdminRecordingsStop200ApplicationJSON withMappings(PostAdminRecordingsStop200ApplicationJSONMappings[] mappings) {
        this.mappings = mappings;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PostAdminRecordingsStop200ApplicationJSONMeta meta;

    public PostAdminRecordingsStop200ApplicationJSON withMeta(PostAdminRecordingsStop200ApplicationJSONMeta meta) {
        this.meta = meta;
        return this;
    }
    
    public PostAdminRecordingsStop200ApplicationJSON(){}
}
