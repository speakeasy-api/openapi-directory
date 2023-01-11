package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetOntologyTermsByPathwayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetOntologyTermsByPathwayFormatEnum format;
    public GetGetOntologyTermsByPathwayQueryParams withFormat(GetGetOntologyTermsByPathwayFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetOntologyTermsByPathwayQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
}