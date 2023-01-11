package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSwitchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_details")
    public Boolean includeDetails;
    public GetSwitchQueryParams withIncludeDetails(Boolean includeDetails) {
        this.includeDetails = includeDetails;
        return this;
    }
}