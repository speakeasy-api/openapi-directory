package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetNewAlbumsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public AlbumApiGetNewAlbumsFieldsEnum fields;
    public AlbumApiGetNewAlbumsQueryParams withFields(AlbumApiGetNewAlbumsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languagePreference")
    public AlbumApiGetNewAlbumsLanguagePreferenceEnum languagePreference;
    public AlbumApiGetNewAlbumsQueryParams withLanguagePreference(AlbumApiGetNewAlbumsLanguagePreferenceEnum languagePreference) {
        this.languagePreference = languagePreference;
        return this;
    }
}