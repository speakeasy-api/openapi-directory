# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/vtex.local/Intelligent-Search-API/0.1.12/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAutocompleteSuggestionsRequest(
    locale="corrupti",
    query="provident",
)
    
res = s.autocomplete.get_autocomplete_suggestions(req)

if res.autocomplete_search_suggestions is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### autocomplete

* `get_autocomplete_suggestions` - Get list of suggested terms and attributes similar to the search term
* `get_top_searches` - Get list of the 10 most searched terms

### product_list_page

* `get_banners_facets_` - Get list of banners registered for query
* `get_correction_search` - Get attempt of correction of a misspelled term
* `get_facets_facets_` - Get list of the possible facets for a given query
* `get_product_search_facets_` - Get list of products for a query
* `get_search_suggestions` - Get list of suggested terms similar to the search term
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
