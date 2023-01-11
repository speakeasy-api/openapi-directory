package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListPathwaysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetListPathwaysFormatEnum format;
    public GetListPathwaysQueryParams withFormat(GetListPathwaysFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=organism")
    public String organism;
    public GetListPathwaysQueryParams withOrganism(String organism) {
        this.organism = organism;
        return this;
    }
}