package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachmentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object-key")
    public String objectKey;
    public GetAttachmentsListPathParams withObjectKey(String objectKey) {
        this.objectKey = objectKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object-type")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum objectType;
    public GetAttachmentsListPathParams withObjectType(openapisdk.models.shared.GlobalRequestPageSizeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
}