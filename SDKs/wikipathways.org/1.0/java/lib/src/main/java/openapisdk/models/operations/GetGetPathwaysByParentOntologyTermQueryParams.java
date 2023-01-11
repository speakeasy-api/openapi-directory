package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPathwaysByParentOntologyTermQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetPathwaysByParentOntologyTermFormatEnum format;
    public GetGetPathwaysByParentOntologyTermQueryParams withFormat(GetGetPathwaysByParentOntologyTermFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term")
    public String term;
    public GetGetPathwaysByParentOntologyTermQueryParams withTerm(String term) {
        this.term = term;
        return this;
    }
}