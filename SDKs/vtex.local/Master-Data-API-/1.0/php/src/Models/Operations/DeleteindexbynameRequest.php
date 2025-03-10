<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DeleteindexbynameRequest
{
    /**
     * Type of the content being sent.
     * 
     * @var string $contentType
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Content-Type')]
    public string $contentType;
    
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     * 
     * @var string $dataEntityName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=dataEntityName')]
    public string $dataEntityName;
    
    /**
     * Name of the index.
     * 
     * @var string $indexName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=index_name')]
    public string $indexName;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->dataEntityName = "";
		$this->indexName = "";
	}
}
