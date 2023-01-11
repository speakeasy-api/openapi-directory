package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provisioned")
    public String provisioned;
    public GetEntitiesQueryParams withProvisioned(String provisioned) {
        this.provisioned = provisioned;
        return this;
    }
}