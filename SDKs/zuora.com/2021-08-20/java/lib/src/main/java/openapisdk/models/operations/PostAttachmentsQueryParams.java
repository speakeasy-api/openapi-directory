package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=associatedObjectKey")
    public String associatedObjectKey;
    public PostAttachmentsQueryParams withAssociatedObjectKey(String associatedObjectKey) {
        this.associatedObjectKey = associatedObjectKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=associatedObjectType")
    public openapisdk.models.shared.GlobalHeaderZuoraEntityIdsSingleEnum associatedObjectType;
    public PostAttachmentsQueryParams withAssociatedObjectType(openapisdk.models.shared.GlobalHeaderZuoraEntityIdsSingleEnum associatedObjectType) {
        this.associatedObjectType = associatedObjectType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public PostAttachmentsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
}