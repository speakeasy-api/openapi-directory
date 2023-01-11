package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Association {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileId")
    public String fileId;
    public Association withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectGroup")
    public ObjectGroupEnum objectGroup;
    public Association withObjectGroup(ObjectGroupEnum objectGroup) {
        this.objectGroup = objectGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectId")
    public String objectId;
    public Association withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectType")
    public ObjectTypeEnum objectType;
    public Association withObjectType(ObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
}