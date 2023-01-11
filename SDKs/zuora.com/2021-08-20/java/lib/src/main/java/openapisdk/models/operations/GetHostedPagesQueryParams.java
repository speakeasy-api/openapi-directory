package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHostedPagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=versionNumber")
    public String versionNumber;
    public GetHostedPagesQueryParams withVersionNumber(String versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}