<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetApiLogisticsPvtShippingPoliciesRequest
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
    
    /**
     * Desired number of pages to retrieve information from your Shipping Policies.
     * 
     * @var string $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public string $page;
    
    /**
     * Desired number of items per page, to retrieve information from your Shipping Policies.
     * 
     * @var string $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=perPage')]
    public string $perPage;
    
	public function __construct()
	{
		$this->accept = "";
		$this->contentType = "";
		$this->page = "";
		$this->perPage = "";
	}
}
