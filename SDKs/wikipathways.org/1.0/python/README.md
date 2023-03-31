# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/wikipathways.org/1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetFindInteractionsRequest(
    format="dump",
    query="provident",
)
    
res = s.all_functions.get_find_interactions(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### all_functions

* `get_find_interactions` - findInteractionsFind interactions defined in WikiPathways pathways.
* `get_find_pathways_by_literature` - findPathwaysByLiterature
* `get_find_pathways_by_text` - findPathwaysByText
* `get_find_pathways_by_xref` - findPathwaysByXref
* `get_get_colored_pathway` - getColoredPathwayGet a colored image version of the pathway.
* `get_get_curation_tag_history` - getCurationTagHistory
* `get_get_curation_tags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `get_get_curation_tags_by_name` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `get_get_ontology_terms_by_pathway` - getOntologyTermsByPathway
* `get_get_pathway` - getPathway
* `get_get_pathway_as` - getPathwayAsDownload a pathway in the specified file format.
* `get_get_pathway_history` - getPathwayHistoryGet the revision history of a pathway.
* `get_get_pathway_info` - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
* `get_get_pathways_by_ontology_term` - getPathwaysByOntologyTerm
* `get_get_pathways_by_parent_ontology_term` - getPathwaysByParentOntologyTerm
* `get_get_recent_changes` - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
* `get_get_user_by_orcid` - getUserByOrcid
* `get_get_xref_list` - getXrefList
* `get_list_organisms` - listOrganisms
* `get_list_pathways` - listPathways
* `get_login` - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
* `get_remove_curation_tag` - removeCurationTagRemove a curation tag from a pathway.
* `get_remove_ontology_tag` - removeOntologyTag
* `get_save_curation_tag` - saveCurationTag
* `get_save_ontology_tag` - saveOntologyTag
* `get_update_pathway` - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* `post_create_pathway` - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### curation_tags

* `get_get_curation_tag_history` - getCurationTagHistory
* `get_get_curation_tags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `get_get_curation_tags_by_name` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `get_get_ontology_terms_by_pathway` - getOntologyTermsByPathway
* `get_save_curation_tag` - saveCurationTag

### download

* `get_get_colored_pathway` - getColoredPathwayGet a colored image version of the pathway.
* `get_get_pathway_as` - getPathwayAsDownload a pathway in the specified file format.
* `get_get_xref_list` - getXrefList

### history

* `get_get_curation_tag_history` - getCurationTagHistory
* `get_get_pathway_history` - getPathwayHistoryGet the revision history of a pathway.
* `get_get_recent_changes` - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### ontology_tags

* `get_get_pathways_by_ontology_term` - getPathwaysByOntologyTerm
* `get_get_pathways_by_parent_ontology_term` - getPathwaysByParentOntologyTerm
* `get_remove_ontology_tag` - removeOntologyTag
* `get_save_ontology_tag` - saveOntologyTag

### organism_list

* `get_list_organisms` - listOrganisms

### pathway_information

* `get_get_curation_tags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `get_get_ontology_terms_by_pathway` - getOntologyTermsByPathway
* `get_get_pathway` - getPathway
* `get_get_pathway_info` - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### pathway_list

* `get_get_curation_tags_by_name` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `get_get_pathways_by_ontology_term` - getPathwaysByOntologyTerm
* `get_get_pathways_by_parent_ontology_term` - getPathwaysByParentOntologyTerm
* `get_list_pathways` - listPathways

### search

* `get_find_interactions` - findInteractionsFind interactions defined in WikiPathways pathways.
* `get_find_pathways_by_literature` - findPathwaysByLiterature
* `get_find_pathways_by_text` - findPathwaysByText
* `get_find_pathways_by_xref` - findPathwaysByXref
* `get_remove_curation_tag` - removeCurationTagRemove a curation tag from a pathway.

### user_management

* `get_get_user_by_orcid` - getUserByOrcid
* `get_login` - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### write_create_update_delete

* `get_remove_ontology_tag` - removeOntologyTag
* `get_save_curation_tag` - saveCurationTag
* `get_save_ontology_tag` - saveOntologyTag
* `get_update_pathway` - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* `post_create_pathway` - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
