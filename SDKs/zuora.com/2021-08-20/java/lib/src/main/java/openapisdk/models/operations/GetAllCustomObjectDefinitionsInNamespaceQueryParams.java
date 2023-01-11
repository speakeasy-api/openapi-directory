package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllCustomObjectDefinitionsInNamespaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=select")
    public openapisdk.models.shared.GlobalHeaderAuthorizationOAuthEnum select;
    public GetAllCustomObjectDefinitionsInNamespaceQueryParams withSelect(openapisdk.models.shared.GlobalHeaderAuthorizationOAuthEnum select) {
        this.select = select;
        return this;
    }
}