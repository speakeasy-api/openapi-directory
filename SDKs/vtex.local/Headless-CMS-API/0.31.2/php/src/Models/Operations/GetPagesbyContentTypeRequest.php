<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetPagesbyContentTypeRequest
{
    /**
     * Builder ID specified in the settings of the CMS app.
     * 
     * @var string $builderId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=builderId')]
    public string $builderId;
    
    /**
     * Content Type identifier defined in the FastStore project.
     * 
     * @var string $contentType
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=content-type')]
    public string $contentType;
    
    /**
     * Filter results by a property of the page (e.g., `filters[status]`) or by a nested custom field of the `parameters` object (e.g., `filters[parameters.collection.sort]`).
     * 
     * *Replace {field} with the desired property.*
     * 
     * @var ?string $filtersField
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filters[{field}]')]
    public ?string $filtersField = null;
    
    /**
     * Release ID presented in the URL path of a CMS preview.
     * 
     * @var ?string $releaseId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=releaseId')]
    public ?string $releaseId = null;
    
    /**
     * Version ID presented in the URL path of a CMS preview.
     * 
     * @var ?string $versionId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=versionId')]
    public ?string $versionId = null;
    
	public function __construct()
	{
		$this->builderId = "";
		$this->contentType = "";
		$this->filtersField = null;
		$this->releaseId = null;
		$this->versionId = null;
	}
}
