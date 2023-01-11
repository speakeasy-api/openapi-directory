package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiGetEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relationshipType")
    public UserApiGetEventsRelationshipTypeEnum relationshipType;
    public UserApiGetEventsQueryParams withRelationshipType(UserApiGetEventsRelationshipTypeEnum relationshipType) {
        this.relationshipType = relationshipType;
        return this;
    }
}