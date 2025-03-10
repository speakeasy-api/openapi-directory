<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateNsxvManagerRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?\OpenAPI\OpenAPI\Models\Shared\NSXVManagerDataSource $nsxvManagerDataSource = null;
    
    /**
     * entity id
     * 
     * @var string $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public string $id;
    
	public function __construct()
	{
		$this->nsxvManagerDataSource = null;
		$this->id = "";
	}
}
