package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationsByObjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ObjectId")
    public String objectId;
    public GetAssociationsByObjectPathParams withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
}