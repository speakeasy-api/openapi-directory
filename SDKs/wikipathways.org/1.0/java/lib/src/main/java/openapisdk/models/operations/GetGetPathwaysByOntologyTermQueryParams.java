package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPathwaysByOntologyTermQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetPathwaysByOntologyTermFormatEnum format;
    public GetGetPathwaysByOntologyTermQueryParams withFormat(GetGetPathwaysByOntologyTermFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term")
    public String term;
    public GetGetPathwaysByOntologyTermQueryParams withTerm(String term) {
        this.term = term;
        return this;
    }
}