/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class NodeId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public NodeTypeEnum entityType;

    public NodeId withEntityType(NodeTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    
    /**
     * Entity Identifier
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public NodeId withId(String id) {
        this.id = id;
        return this;
    }
    
    public NodeId(){}
}
