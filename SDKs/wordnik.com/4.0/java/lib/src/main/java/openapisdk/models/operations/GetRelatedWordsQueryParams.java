package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelatedWordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limitPerRelationshipType")
    public Integer limitPerRelationshipType;
    public GetRelatedWordsQueryParams withLimitPerRelationshipType(Integer limitPerRelationshipType) {
        this.limitPerRelationshipType = limitPerRelationshipType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relationshipTypes")
    public GetRelatedWordsRelationshipTypesEnum relationshipTypes;
    public GetRelatedWordsQueryParams withRelationshipTypes(GetRelatedWordsRelationshipTypesEnum relationshipTypes) {
        this.relationshipTypes = relationshipTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetRelatedWordsUseCanonicalEnum useCanonical;
    public GetRelatedWordsQueryParams withUseCanonical(GetRelatedWordsUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}