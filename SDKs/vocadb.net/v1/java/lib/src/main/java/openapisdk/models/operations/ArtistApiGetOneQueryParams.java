package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtistApiGetOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ArtistApiGetOneFieldsEnum fields;
    public ArtistApiGetOneQueryParams withFields(ArtistApiGetOneFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ArtistApiGetOneLangEnum lang;
    public ArtistApiGetOneQueryParams withLang(ArtistApiGetOneLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=relations")
    public ArtistApiGetOneRelationsEnum relations;
    public ArtistApiGetOneQueryParams withRelations(ArtistApiGetOneRelationsEnum relations) {
        this.relations = relations;
        return this;
    }
}