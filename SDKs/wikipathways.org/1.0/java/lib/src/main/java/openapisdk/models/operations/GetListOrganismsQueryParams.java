package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOrganismsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetListOrganismsFormatEnum format;
    public GetListOrganismsQueryParams withFormat(GetListOrganismsFormatEnum format) {
        this.format = format;
        return this;
    }
}