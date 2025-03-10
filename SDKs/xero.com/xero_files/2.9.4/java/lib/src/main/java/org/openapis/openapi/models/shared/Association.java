/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Association - A successful request
 */
public class Association {
    /**
     * The unique identifier of the file
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileId")
    public String fileId;

    public Association withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    
    /**
     * The Object Group that the object is in. These roughly correlate to the endpoints that can be used to retrieve the object via the core accounting API.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectGroup")
    public ObjectGroupEnum objectGroup;

    public Association withObjectGroup(ObjectGroupEnum objectGroup) {
        this.objectGroup = objectGroup;
        return this;
    }
    
    /**
     * The identifier of the object that the file is being associated with (e.g. InvoiceID, BankTransactionID, ContactID)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectId")
    public String objectId;

    public Association withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    
    /**
     * The Object Type
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectType")
    public ObjectTypeEnum objectType;

    public Association withObjectType(ObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
    
    public Association(){}
}
