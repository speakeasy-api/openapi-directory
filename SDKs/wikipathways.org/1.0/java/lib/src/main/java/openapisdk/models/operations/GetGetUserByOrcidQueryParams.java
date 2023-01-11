package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetUserByOrcidQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetUserByOrcidFormatEnum format;
    public GetGetUserByOrcidQueryParams withFormat(GetGetUserByOrcidFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orcid")
    public String orcid;
    public GetGetUserByOrcidQueryParams withOrcid(String orcid) {
        this.orcid = orcid;
        return this;
    }
}