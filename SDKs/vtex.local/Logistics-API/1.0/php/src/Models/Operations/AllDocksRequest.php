<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class AllDocksRequest
{
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     * 
     * @var string $accept
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Accept')]
    public string $accept;
    
    /**
     * Type of the content being sent
     * 
     * @var string $contentType
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Content-Type')]
    public string $contentType;
    
	public function __construct()
	{
		$this->accept = "";
		$this->contentType = "";
	}
}
