<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ScrolldocumentsRequest
{
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     * 
     * @var string $accept
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Accept')]
    public string $accept;
    
    /**
     * Type of the content being sent.
     * 
     * @var string $contentType
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Content-Type')]
    public string $contentType;
    
    /**
     * Defines the collection of documents to be returned. A range within the collection limited by 100 documents per query.
     * 
     * @var string $restRange
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=REST-Range')]
    public string $restRange;
    
    /**
     * Fields that should be returned by document. Separate fields' names with commas. For example `_fields=email,firstName,document`. You can also use `_all` to fetch all fields.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=_fields')]
    public ?string $fields = null;
    
    /**
     * String to search. Use quotes for a partial query. For example, `_keyword=Maria` or `_keyword="Maria"`.
     * 
     * @var ?string $keyword
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=_keyword')]
    public ?string $keyword = null;
    
    /**
     * Name of the schema the document to be created needs to be compliant with.
     * 
     * @var ?string $schema
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=_schema')]
    public ?string $schema = null;
    
    /**
     * Sets sorting mode in two parts. The first part is the name of the field you want to sort by. In the second part, use `ASC` for ascending or `DESC` for descending.
     * 
     * @var ?string $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=_sort')]
    public ?string $sort = null;
    
    /**
     * Value of the header `X-VTEX-MD-TOKEN` returned in your first request. Send its value in this query string in the subsequent requests. The token has a timeout of 10 minutes, which refreshes after each new request.
     * 
     * @var ?string $token
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=_token')]
    public ?string $token = null;
    
    /**
     * Filter specification.
     * 
     * @var ?string $where
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=_where')]
    public ?string $where = null;
    
    /**
     * Name of the data entity. Defined by the api. Examples of native data entities you can use are `CL` for client profiles and `AD` for client addresses.
     * 
     * @var string $dataEntityName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=dataEntityName')]
    public string $dataEntityName;
    
	public function __construct()
	{
		$this->accept = "";
		$this->contentType = "";
		$this->restRange = "";
		$this->fields = null;
		$this->keyword = null;
		$this->schema = null;
		$this->sort = null;
		$this->token = null;
		$this->where = null;
		$this->dataEntityName = "";
	}
}
